const StaticServer = require('static-server');
const config = require('./src/config');


const server = new StaticServer({
  rootPath: config.staticPath,            // required, the root of the server file tree
  port: config.port,               // required, the port to listen
  name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
  cors: '*',                // optional, defaults to undefined
  followSymlink: true,      // optional, defaults to a 404 error
  templates: {
    index: 'index.html',      // optional, defaults to 'index.html'
    notFound: '404.html'    // optional, defaults to undefined
  }
});

server.start(function () {
  console.log('Server listening to', server.port);
});