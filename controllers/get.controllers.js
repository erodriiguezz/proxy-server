import needle from "needle";
import getToken from "../services/getToken.js";
import getParamsFromUrl from "../services/getParamsFromUrl.js";

export const getSpeaker = async (req, res) => {
  try {
    const requestParams = new URLSearchParams({
      eventid: getParamsFromUrl(req.url).eventid,
      speakerid: getParamsFromUrl(req.url).speakerid,
    });

    const requestResponse = await needle("get", `https://api-na.eventscloud.com/api/v2/ereg/getSpeaker.json?accesstoken=${await getToken()}&${requestParams}`);

    res.status(400).json(requestResponse.body);
  } catch (error) {
    res.status(500).json({ error });
  }
};
