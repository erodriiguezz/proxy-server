import needle from "needle";
import getToken from "../services/getToken.js";
import getParamsFromUrl from "../services/getParamsFromUrl.js";

//
//
export const listAttendees = async (req, res) => {
  try {
    const requestParams = new URLSearchParams({
      accesstoken: await getToken(),
      eventid: getParamsFromUrl(req.url).eventid,
      limit: 2000,
      offset: getParamsFromUrl(req.url).offset,
    });

    const requestResponse = await needle("get", `https://api-na.eventscloud.com/api/v2/ereg/listAttendees.json?${requestParams}`);

    res.status(400).json(requestResponse.body);
  } catch (error) {
    res.status(500).json({ error });
  }
};

//
//
export const listSessions = async (req, res) => {
  try {
    res.status(400).json({ controller: "listSessions" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

//
//
export const listSpeakers = async (req, res) => {
  try {
    const requestParams = new URLSearchParams({
      accesstoken: await getToken(),
      eventid: getParamsFromUrl(req.url).eventid,
    });

    const requestResponse = await needle("get", `https://api-na.eventscloud.com/api/v2/ereg/listSpeakers.json?${requestParams}`);

    res.status(400).json(requestResponse.body);
  } catch (error) {
    res.status(500).json({ error });
  }
};
