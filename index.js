const hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
const routes = require('./routes');

const server = hapi.server({
  // host: process.env.HOST || DEFAULT_HOST,
  // host: 'ec2-54-163-150-249.compute-1.amazonaws.com',
  port: process.env.PORT || 8000,
  routes: {
    cors: {
      origin: ['*'],
      headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match']
    }
  },
  app: {}
});

mongodb: mongoose.connect(
  'mongodb://admin:admin1@ds223763.mlab.com:23763/hondutronicsregister'
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log('Connection with db succeded!');
});

const initServer = async () => {
  try {
    await server.register(routes);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(`Error initiating server`);
    console.log({ err });
  }
};

initServer();
