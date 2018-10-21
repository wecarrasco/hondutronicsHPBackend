var registro = require('../schemas/registro');

exports.registrar = async (req, res) => {
  const registros = new registro({
    nombre: req.payload.nombre,
    numero: req.payload.numero,
    correo: req.payload.correo
  });

  const resp = await registros.save((err) => {
    if (err) {
      console.log('Error ' + err);
      return 'error';
    } else {
      console.log('registro saved');
      saved = true;
      return 'saved';
    }
  });

  return { saved: true };
};
