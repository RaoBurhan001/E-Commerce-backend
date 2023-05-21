const http = require('http');
const app = require('./app');
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);
// Listen on provided port, on all network interfaces.
// connect the db

server.listen(port, () => { console.log(`server listening on port ${port}`); });
