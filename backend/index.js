// index.js
import http from 'http';

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Write some text to the response
    res.end('Welcome to my simple Node.js app!');
});

// Define the port to listen on
const port = PORT;

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const serverless = require("serverless-http");
const app = require("./server"); // Import Express app

module.exports = serverless(app);
