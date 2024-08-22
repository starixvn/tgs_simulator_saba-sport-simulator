export default function ({ router, logger }: HTTPContext) {
  router.post("/", (req, res) => {
    logger.info(req.body);

    res.send({
      error_code: 0,
      message: "",
      Data: {
        last_version_key: 2003,
        BetDetails: [
          {
            trans_id: 290326693862703132,
            vendor_member_id: "14a86din8i_001_test",
            operator_id: "StarixWL",
            league_id: 165,
            leaguename: [
              {
                lang: "en",
                name: "TESTING (Betting Prohibited Area!!) - SOCCER",
              },
              {
                lang: "cs",
                name: "测试- 足球",
              },
            ],
            match_id: 91131910,
            home_id: 147153,
            hometeamname: [
              {
                lang: "en",
                name: "Test W",
              },
              {
                lang: "cs",
                name: "试W",
              },
            ],
            away_id: 108684,
            awayteamname: [
              {
                lang: "en",
                name: "Test O",
              },
              {
                lang: "cs",
                name: "试 O",
              },
            ],
            match_datetime: "2024-08-21T09:00:00",
            sport_type: 1,
            sportname: [
              {
                lang: "en",
                name: "Soccer",
              },
              {
                lang: "cs",
                name: "足球",
              },
            ],
            bet_type: 1,
            bettypename: [
              {
                lang: "en",
                name: "Handicap",
              },
              {
                lang: "cs",
                name: "让球",
              },
            ],
            parlay_ref_no: 0,
            odds: 1.76,
            stake: 1000.0,
            transaction_time: "2024-08-21T04:55:51.28",
            ticket_status: "lose",
            buyback_amount: 753.24,
            winlost_amount: -246.76,
            after_amount: 1000.0,
            currency: 20,
            winlost_datetime: "2024-08-21T00:00:00",
            odds_type: 3,
            bet_team: "h",
            isLucky: "False",
            ticket_extra_status: "cashout",
            home_hdp: 0.0,
            away_hdp: 0.25,
            hdp: 0.25,
            betfrom: "x",
            islive: "1",
            home_score: 0,
            away_score: 0,
            settlement_time: "2024-08-21T04:59:15.26",
            customInfo1: "",
            customInfo2: "",
            customInfo3: "",
            customInfo4: "",
            customInfo5: "",
            ba_status: "0",
            version_key: 2002,
            ParlayData: null,
            risklevelname: "New",
            risklevelnamecs: "新玩家",
          },
          {
            trans_id: 290334274479980594,
            vendor_member_id: "14a86din8i_002_test",
            operator_id: "StarixWL",
            league_id: 152761,
            leaguename: [
              {
                lang: "en",
                name: "TESTING (Betting Prohibited Area!!) - UAT AutoAdd Soccer",
              },
              {
                lang: "cs",
                name: "UAT測試(禁止下註區!) - 足球",
              },
            ],
            match_id: 91115684,
            home_id: 1187618,
            hometeamname: [
              {
                lang: "en",
                name: "AutoAdd Team G",
              },
              {
                lang: "cs",
                name: "自動化測試 隊伍G",
              },
            ],
            away_id: 1186723,
            awayteamname: [
              {
                lang: "en",
                name: "AutoAdd Team B",
              },
              {
                lang: "cs",
                name: "自動化測試 隊伍B",
              },
            ],
            match_datetime: "2024-08-20T21:00:00",
            sport_type: 1,
            sportname: [
              {
                lang: "en",
                name: "Soccer",
              },
              {
                lang: "cs",
                name: "足球",
              },
            ],
            bet_type: 1,
            bettypename: [
              {
                lang: "en",
                name: "Handicap",
              },
              {
                lang: "cs",
                name: "让球",
              },
            ],
            parlay_ref_no: 0,
            odds: -0.9,
            stake: 1.0,
            transaction_time: "2024-08-21T05:25:16.577",
            ticket_status: "running",
            winlost_amount: -0.9,
            after_amount: 999.1,
            currency: 20,
            winlost_datetime: "2024-08-20T00:00:00",
            odds_type: 1,
            bet_team: "h",
            isLucky: "False",
            home_hdp: 0.25,
            away_hdp: 0.0,
            hdp: -0.25,
            betfrom: "W001",
            islive: "1",
            home_score: 0,
            away_score: 0,
            settlement_time: null,
            customInfo1: "",
            customInfo2: "",
            customInfo3: "",
            customInfo4: "",
            customInfo5: "",
            ba_status: "0",
            version_key: 2003,
            ParlayData: null,
            risklevelname: "New",
            risklevelnamecs: "新玩家",
          },
        ],
      },
    });
  });
}
