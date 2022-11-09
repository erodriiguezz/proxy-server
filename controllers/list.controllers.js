import needle from "needle";
import getToken from "../services/getToken.js";

export const listSpeakers = async (req, res) => {
  try {
    res.status(400).json(await getToken());
  } catch (error) {
    res.status(500).json({ error });
  }
  n;
};
