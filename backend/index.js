const serverless = require("serverless-http");
const app = require("./server"); // Import your Express server

module.exports = serverless(app);
console.log('Deployed');
