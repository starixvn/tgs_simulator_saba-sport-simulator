FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json .
COPY server/package.json server/
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine AS cleaner
WORKDIR /app
COPY server/package.json .
RUN npm install --omit=dev
RUN npx mod-pruner prune --force && rm package-lock.json
COPY --from=builder /app/server/dist ./src

FROM node:lts-alpine
ARG PORT=5000
ENV PORT=${PORT}

RUN adduser -D saba
WORKDIR /opt/saba
COPY --from=cleaner /app ./
RUN chown -R saba:saba /opt/saba
USER saba

EXPOSE ${PORT}
CMD [ "node", "src" ]
