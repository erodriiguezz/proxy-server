import needle from "needle";
import getToken from "./getToken.js";

export const listSpeakers = async (req, res) => {
  const token = await getToken();

  res.send("hello");
};
