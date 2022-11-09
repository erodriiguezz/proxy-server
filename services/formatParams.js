const formatParams = (url) => {
  let params = {};

  const reqParams = url.split("?")[1].split("&");
  reqParams.forEach((param) => {
    console.log(param);
    params[`${param.split("=")[0]}`] = `${param.split("=")[1]}`;
  });

  return params;
};

export default formatParams;
