const url = require("url");
const express = require("express");
const router = express.Router();
const needle = require("needle");

// env variables
const API_URL = process.env.API_URL;
const API_ACCOUNT_ID = process.env.API_ACCOUNT_ID;
const API_KEY = process.env.API_KEY;

router.get("/token", async (req, res) => {
  try {
    const params = new URLSearchParams({
      accountid: API_ACCOUNT_ID,
      key: API_KEY,
      ...url.parse(req.url, true).query,
    });

    const apiRes = await needle("get", `${API_URL}?${params}`);
    const data = apiRes.body;

    if (process.env.NODE_DEV !== "production") {
      console.log(`REQUEST: ${API_URL}?${params}`);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/attendees", async (req, res) => {
  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const apiRes = await needle("get", `https://na.eventscloud.com/api/v2/ereg/listAttendees.json?${params}`);
    const data = apiRes.body;

    if (process.env.NODE_DEV !== "production") {
      console.log(`REQUEST: ${API_URL}?${params}`);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
