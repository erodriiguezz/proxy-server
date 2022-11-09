import needle from "needle";

const getToken = async () => {
  try {
    const params = new URLSearchParams({
      accountid: process.env.API_ACCOUNT_ID,
      key: process.env.API_KEY,
    });

    const authorize = await needle("get", `https://api-na.eventscloud.com/api/v2/global/authorize.json?${params}`);

    return authorize.body.accesstoken;
  } catch (error) {
    return { error };
  }
};

export default getToken;
