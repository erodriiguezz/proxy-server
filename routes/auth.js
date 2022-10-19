const needle = require("needle");

require("dotenv").config;

const getToken = async () => {
  try {
    let params = new URLSearchParams({
      accountid: process.env.API_ACCOUNT_ID,
      key: process.env.API_KEY,
    });

    const rawRes = await needle("get", `https://api-na.eventscloud.com/api/v2/global/authorize.json?${params}`);

    return rawRes.body.accesstoken;
  } catch (error) {
    console.log({ error });
    return error;
  }
};

exports.getToken = getToken;
