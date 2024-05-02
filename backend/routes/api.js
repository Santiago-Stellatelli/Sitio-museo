var express = require('express');
var router = express.Router();
var modelNovedades = require('./../models/novedades');
var cloudinary = require('cloudinary').v2;


router.get('/novedades', async function (req, res, next) {
    var novedades = await modelNovedades.getNovedades();

    novedades = novedades.map(novedad =>{
        if(novedad.id_img){
            imagen = cloudinary.url(novedad.id_img,{
                // width: 100, height:100, crop:'fill',
                // width:178, height: 237, crop: 'fill'
                // width: 711 , height: 948, crop:'fill'
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

module.exports = router;