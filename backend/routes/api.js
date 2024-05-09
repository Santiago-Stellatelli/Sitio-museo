var express = require('express');
var router = express.Router();
var modelNovedades = require('./../models/novedades');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer')


router.get('/novedades', async function (req, res, next) {
    var novedades = await modelNovedades.getNovedades();

    novedades = novedades.map(novedad =>{
        if(novedad.id_img){
            imagen = cloudinary.url(novedad.id_img,{
                // width: 100, height:100, crop:'fill',
                // width:178, height: 237, crop: 'fill'
                // width: 711 , height: 948, crop:'fill'
                width:355, height:474, crop:'fill'
            });
            return{
                ...novedad, imagen
            }
        } else{
            return{
                ...novedad, imagen: ''
            }
        }
    });
    res.json(novedades)
});

router.post('/contacto', async(req,res)=>{
    const mail = {
        to: 'stellatellisantiago@gmail.com',
        subject: 'Han realizado un comentario!',
        html: `${req.body.nombre} ha escrito el siguiente comentario en el sitio web <br> "${req.body.comentario}"`
    }
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
      await transport.sendMail(mail)
      res.status(201).json({
        error: (false),
        message: 'Mensaje enviado'
      });
});

module.exports = router;