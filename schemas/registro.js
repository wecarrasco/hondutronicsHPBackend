var mongoose = require('mongoose');

var RegistroSchema = new mongoose.Schema({
  correo: String,
  numero: String,
  nombre: String
});

module.exports = mongoose.model('registro', RegistroSchema);
