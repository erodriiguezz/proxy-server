const express = require("express");
const router = express.Router();
const needle = require("needle");

const auth = require("./auth");

// authorize
router.get("/authorize", async (req, res) => {
  const token = await auth.getToken();
  res.status(200).json(token);
});

// create attendee
router.post("/attendee/create", async (req, res) => {
  const apiUrl = "https://na.eventscloud.com/api/v2/ereg/createAttendee.json";

  try {
    let params = {
      // access token
      // event id
      // attendee id
    };

    // get and format params
    const reqParams = req.url.split("?")[1].split("&");
    reqParams.forEach((param) => {
      params[`${param.split("=")[0]}`] = `${param.split("=")[1]}`;
    });

    let attendeeData = req.body;

    const rawRes = await needle("post", `${apiUrl}?${new URLSearchParams(params)}`, attendeeData);

    res.status(200).json(rawRes.body);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get attendee
router.get("/attendee", async (req, res) => {
  const apiUrl = "https://na.eventscloud.com/api/v2/ereg/getAttendee.json";

  try {
    let params = {
      // access token
      // event id
      // attendee id
    };

    // get and format params
    const reqParams = req.url.split("?")[1].split("&");
    reqParams.forEach((param) => {
      params[`${param.split("=")[0]}`] = `${param.split("=")[1]}`;
    });

    const rawRes = await needle("get", `${apiUrl}?${new URLSearchParams(params)}`);

    res.status(200).json(rawRes.body);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// list attendees
router.get("/attendee/list", async (req, res) => {
  const apiUrl = "https://na.eventscloud.com/api/v2/ereg/listAttendees.json";

  try {
    let params = {
      // access token
      // event id
      // offset (optional)
    };

    // get and format params
    const reqParams = req.url.split("?")[1].split("&");
    reqParams.forEach((param) => {
      params[`${param.split("=")[0]}`] = `${param.split("=")[1]}`;
    });

    const rawRes = await needle("get", `${apiUrl}?${new URLSearchParams(params)}`);

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

// list speakers
router.get("/speaker/list", async (req, res) => {
  const token = await auth.getToken();

  try {
    let params = {
      // event id
    };

    // get and format params
    const reqParams = req.url.split("?")[1].split("&");
    reqParams.forEach((param) => {
      params[`${param.split("=")[0]}`] = `${param.split("=")[1]}`;
    });

    const rawRes = await needle("get", `https://api-na.eventscloud.com/api/v2/ereg/listSpeakers.json?accesstoken=${token}&${new URLSearchParams(params)}`);

    res.status(200).json(rawRes.body);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get speaker
router.get("/speaker", async (req, res) => {
  const token = await auth.getToken();

  try {
    let params = {
      // event id
      // speaker id
    };

    // get and format params
    const reqParams = req.url.split("?")[1].split("&");
    reqParams.forEach((param) => {
      params[`${param.split("=")[0]}`] = `${param.split("=")[1]}`;
    });

    const rawRes = await needle("get", `https://api-na.eventscloud.com/api/v2/ereg/getSpeaker.json?accesstoken=${token}&${new URLSearchParams(params)}`);

    res.status(200).json(rawRes.body);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
