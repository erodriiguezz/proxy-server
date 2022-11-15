import needle from "needle";
import getToken from "../services/getToken.js";
import getParamsFromUrl from "../services/getParamsFromUrl.js";

//
//
export const createAttendee = async (req, res) => {
  try {
    const requestParams = new URLSearchParams({
      accesstoken: await getToken(),
      eventid: getParamsFromUrl(req.url).eventid,
      email: getParamsFromUrl(req.url).email,
    });

    const requestResponse = await needle("post", `https://api-na.eventscloud.com/api/v2/ereg/createAttendee.json?${requestParams}`, req.body);

    res.status(200).json(requestResponse.body);
  } catch (error) {
    res.status(500).json({ error });
  }
};
