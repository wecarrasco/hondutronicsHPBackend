var registroController = require('./controllers/registroController');

module.exports = {
  name: 'APIRoutes',
  register: async (server) => {
    server.route([
      {
        method: 'GET',
        path: '/',
        handler: async (req, res) => {
          return 'API v1, Hondutronics Registros';
        }
      },
      {
        method: 'POST',
        path: '/registrar',
        handler: registroController.registrar
      }
    ]);
  }
};
