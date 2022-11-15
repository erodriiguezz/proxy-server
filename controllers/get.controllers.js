import needle from "needle";
import getToken from "../services/getToken.js";
import getParamsFromUrl from "../services/getParamsFromUrl.js";
import getParams from "../services/getParamsFromUrl.js";

//
//
export const getAttendee = async (req, res) => {
  try {
    const requestParams = new URLSearchParams({
      accesstoken: await getToken(),
      eventid: getParamsFromUrl(req.url).eventid,
      attendeeid: getParamsFromUrl(req.url).attendeeid,
    });

    const requestResponse = await needle("get", `https://api-na.eventscloud.com/api/v2/ereg/getAttendee.json?${requestParams}`);

    res.status(200).json(requestResponse.body);
  } catch (error) {
    res.status(500).json({ error });
  }
};

//
//
export const getEvent = async (req, res) => {
  try {
    const requestParams = new URLSearchParams({
      accesstoken: await getToken(),
      eventid: getParamsFromUrl(req.url).eventid,
      customfields: true,
    });

    const requestResponse = await needle("get", `https://api-na.eventscloud.com/api/v2/ereg/getEvent.json?${requestParams}`);

    res.status(200).json(requestResponse.body);
  } catch (error) {
    res.status(500).json({ error });
  }
};

//
//
export const getSession = async (req, res) => {
  try {
    const requestParams = new URLSearchParams({
      accesstoken: await getToken(),
      eventid: getParamsFromUrl(req.url).eventid,
      sessionid: getParamsFromUrl(req.url).sessionid,
      sessionkey: getParamsFromUrl(req.url).sessionkey,
    });

    const requestResponse = await needle("get", `https://api-na.eventscloud.com/api/v2/ereg/getSession.json?${requestParams}`);

    res.status(200).json(requestResponse.body);
  } catch (error) {
    res.status(500).json({ error });
  }
};

//
//
export const getSpeaker = async (req, res) => {
  try {
    const requestParams = new URLSearchParams({
      accesstoken: await getToken(),
      eventid: getParamsFromUrl(req.url).eventid,
      speakerid: getParamsFromUrl(req.url).speakerid,
    });

    const requestResponse = await needle("get", `https://api-na.eventscloud.com/api/v2/ereg/getSpeaker.json?${requestParams}`);

    res.status(200).json(requestResponse.body);
  } catch (error) {
    res.status(500).json({ error });
  }
};
