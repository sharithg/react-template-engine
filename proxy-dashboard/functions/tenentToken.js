const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

exports.handler = async (event, context) => {
  if (process.env.TENENT_TOKEN) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        tenent_token: process.env.TENENT_TOKEN,
      }),
    };
  }
  return {
    statusCode: 400,
    headers,
    body: JSON.stringify({
      message: "no tenent token found",
    }),
  };
};
