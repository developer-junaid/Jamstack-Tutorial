// Get Queries
const { UPDATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");

// Formatted Response
const formattedResponse = require("./utils/formattedResponse");

// Function Body
exports.handler = async (event) => {
  // Method Check
  if (event.httpMethod !== "PUT") {
    return formattedResponse(405, { err: "Method not supported" });
  }

  // Get data
  const { name, url, description, _id: id, archived } = JSON.parse(event.body); // Get Data from request body
  const variables = { name, url, description, archived, id }; // Data to store

  try {
    const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables);
    // Respond
    return formattedResponse(200, updatedLink);
  } catch (error) {
    console.error(error);
    // Respond
    return formattedResponse(500, { error: "Something went wrong" });
  }
};
