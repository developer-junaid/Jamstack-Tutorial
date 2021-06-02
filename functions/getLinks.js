// Get Queries
const { GET_LINKS } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");

// Formatted Response
const formattedResponse = require("./utils/formattedResponse");

// Function Body
exports.handler = async (event) => {
  try {
    const res = await sendQuery(GET_LINKS);
    const data = res.allLinks.data; // Get Data
    // Respond
    return formattedResponse(200, data);
  } catch (error) {
    console.error(error);
    // Respond
    return formattedResponse(500, { error: "Something went wrong" });
  }
};
