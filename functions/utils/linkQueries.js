// GQL Queries
const GET_LINKS = `
 query{
   allLinks{
     data{
       name
       _id
       url
       description
       archived
     }
   }
 }`;

// Export
module.exports = {
  GET_LINKS,
};
