const axios = require("axios");
require("dotenv").config();

// Body
module.exports = async (query, variables) => {
  //  Get Data
  const {
    data: { data, errors },
  } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query,
      variables,
    },
  });

  console.log(data);

  // If errors
  if (errors) {
    console.error(errors);
    throw new Error("Something went wrong");
  }

  // Respond
  return data;
};
