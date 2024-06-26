import express from 'express'; // TODO: Import the express module to create an Express application
import { crawl } from './utils.js'; // TODO: Import the crawl function from the utils module

const app = express(); // TODO: Create an instance of an Express application
const port = 1337; // TODO: Define the port number on which the server will listen

// TODO: Define an endpoint to start the crawling process
app.get('/crawl', (req, res) => {
  // TODO: Get the start URL from the query parameters or use a default URL
  // TODO: Get the ignore path from the query parameters or use a default ignore path

  // TODO: Call the crawl function with the start URL and ignore path
  // TODO: Send a response indicating that the crawling has started
  // TODO: Handle errors and send a 500 status response with the error message
});

// TODO: Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // TODO: Log a message indicating that the server is running
});
