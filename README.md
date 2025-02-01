# Node.js Server Port Already in Use Error

This repository demonstrates a common error in Node.js where a server fails to start because the specified port is already in use. The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution to handle this scenario gracefully.

## Bug Description

The `http.createServer()` method is used to create a simple HTTP server. When the server attempts to listen on port 8080 using `server.listen(8080)`, an error is thrown if another process is already using that port. This is especially problematic when restarting the server without verifying port availability.

## Solution

The solution involves using the `'error'` event listener on the `server` object. This listener catches the error, logs it to the console and provides better error handling.