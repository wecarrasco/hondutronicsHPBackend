var registro = require('../schemas/registro');
var nodemailer = require('nodemailer');

exports.registrar = async (req, res) => {
  const registros = new registro({
    nombre: req.payload.nombre,
    numero: req.payload.numero,
    correo: req.payload.correo,
    producto: req.payload.producto
  });

  const resp = await registros.save((err) => {
    if (err) {
      console.log('Error ' + err);
      return 'error';
    } else {
      console.log('registro saved');

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
          user: 'hondutronics.sac@gmail.com',
          pass: 'mswa2018hdc'
        }
      });

      var mailOptions = {
        from: 'hondutronics.sac@gmail.com',
        to: 'hondutronics.sac@gmail.com',
        subject: 'Cotizacion ' + registros.nombre,
        text: `Nombre: ${registros.nombre}
         Correo: ${registros.correo}
         Numero: ${registros.numero}
         Productos: ${registros.producto}`
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      saved = true;
      return 'saved';
    }
  });

  return { saved: true };
};
