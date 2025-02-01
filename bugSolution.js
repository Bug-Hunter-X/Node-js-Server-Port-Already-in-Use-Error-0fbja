const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Use the 'error' event listener to handle port binding errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port 8080 is already in use. Please choose another port.`);
    process.exit(1); // Exit the process with an error code
  } else {
    console.error(`An unexpected error occurred:`, err);
    process.exit(1); // Exit the process with an error code
  }
});

server.listen(8080); 
console.log('Server is running on port 8080');