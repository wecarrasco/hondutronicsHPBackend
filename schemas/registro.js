var mongoose = require('mongoose');

var RegistroSchema = new mongoose.Schema({
  correo: String,
  numero: String,
  nombre: String,
  producto: String
});

module.exports = mongoose.model('registro', RegistroSchema);
