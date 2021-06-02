// Get Queries
const { DELETE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");

// Formatted Response
const formattedResponse = require("./utils/formattedResponse");

// Function Body
exports.handler = async (event) => {
  // Method Check
  if (event.httpMethod !== "DELETE") {
    return formattedResponse(405, { err: "Method not supported" });
  }

  // Get data
  const { id } = JSON.parse(event.body); // Get Data from request body
  const variables = { id }; // Data to store

  try {
    const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables);
    // Respond
    return formattedResponse(200, deletedLink);
  } catch (error) {
    console.error(error);
    // Respond
    return formattedResponse(500, { error: "Something went wrong" });
  }
};
