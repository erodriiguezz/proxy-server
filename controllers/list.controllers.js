import needle from "needle";
import getToken from "../services/getToken.js";
import formatParams from "../services/formatParams.js";

export const listAttendees = async (req, res) => {
  try {
    res.status(400).json(await getToken());
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const listSessions = async (req, res) => {
  try {
    res.status(400).json(await getToken());
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const listSpeakers = async (req, res) => {
  try {
    res.status(400).json(formatParams(req.url));
  } catch (error) {
    res.status(500).json({ error });
  }
};
