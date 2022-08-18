const express = require("express");
const router = express.Router();
const needle = require("needle");

// env variables
const API_ACCOUNT_ID = process.env.API_ACCOUNT_ID;
const API_KEY = process.env.API_KEY;

// authorize
router.get("/authorize", async (req, res) => {
  const apiUrl = "https://api-na.eventscloud.com/api/v2/global/authorize.json";

  try {
    let params = new URLSearchParams({
      accountid: API_ACCOUNT_ID,
      key: API_KEY,
    });

    const rawRes = await needle("get", `${apiUrl}?${params}`);
    res.status(200).json(rawRes.body);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// list attendees
router.get("/attendee/list", async (req, res) => {
  const apiUrl = "https://na.eventscloud.com/api/v2/ereg/listAttendees.json?";

  try {
    let params = {};

    // get and format params
    const reqParams = req.url.split("?")[1].split("&");
    reqParams.forEach((param) => {
      params[`${param.split("=")[0]}`] = `${param.split("=")[1]}`;
    });

    const rawRes = await needle("get", `${apiUrl}${new URLSearchParams(params)}`);
    res.status(200).json(rawRes.body);

    // if custom filters are needed before sending the request
    // switch (true) {
    //   case !params.accesstoken:
    //     res.status(400).send("Access token is missing.");
    //     break;

    //   case !params.eventid:
    //     res.status(400).send("Event ID is missing.");
    //     break;

    //   case !params.offset:
    //     res.status(400).send("Offset is missing.");
    //     break;

    //   default:
    //     const rawRes = await needle("get", `${apiUrl}${new URLSearchParams(params)}`);
    //     res.status(200).json(rawRes.body);
    //     break;
    // }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get attendee information
router.get("/attendee/:id", async (req, res) => {
  const apiUrl = "https://na.eventscloud.com/api/v2/global/getAttendee.json";
});

// create attendee
router.get("/attendee/create", async (req, res) => {
  const apiUrl = "https://na.eventscloud.com/api/v2/global/createAttendee.json";
});

// attendee/list
// attendee/[id]
// attendee/create

// router.get("/token", async (req, res) => {
//   try {
//     const params = new URLSearchParams({
//       accountid: API_ACCOUNT_ID,
//       key: API_KEY,
//       ...url.parse(req.url, true).query,
//     });

//     const apiRes = await needle("get", `${API_URL}?${params}`);
//     const data = apiRes.body;

//     if (process.env.NODE_DEV !== "production") {
//       console.log(`REQUEST: ${API_URL}?${params}`);
//     }

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

// router.get("/attendees", async (req, res) => {
//   try {
//     const params = new URLSearchParams({
//       ...url.parse(req.url, true).query,
//     });

//     const apiRes = await needle("get", `https://na.eventscloud.com/api/v2/ereg/listAttendees.json?${params}`);
//     const data = apiRes.body;

//     if (process.env.NODE_DEV !== "production") {
//       console.log(`REQUEST: ${API_URL}?${params}`);
//     }

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

module.exports = router;
