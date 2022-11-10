import needle from "needle";

const apiRequest = async (type, url) => {
  const data = await needle(type, url);
  return data.body;
};

export default apiRequest;
