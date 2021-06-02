// Get Queries
const { CREATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");

// Formatted Response
const formattedResponse = require("./utils/formattedResponse");

// Function Body
exports.handler = async (event) => {
  // Get data
  const { name, url, description } = JSON.parse(event.body); // Get Data from request body
  const variables = { name, url, description, archived: false }; // Data to store

  try {
    const { createLink: createdLink } = await sendQuery(CREATE_LINK, variables);
    // Respond
    return formattedResponse(200, createdLink);
  } catch (error) {
    console.error(error);
    // Respond
    return formattedResponse(500, { error: "Something went wrong" });
  }
};
