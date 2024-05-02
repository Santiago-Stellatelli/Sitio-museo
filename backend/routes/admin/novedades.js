var express = require('express');
var router = express.Router();
var modelNovedades = require('../../models/novedades');
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
var destroy = util.promisify(cloudinary.uploader.destroy);


/* GET home page. */
router.get('/', async function (req, res, next) {
    var novedades = await modelNovedades.getNovedades();

    novedades = novedades.map(novedad =>{
        if(novedad.id_img){
            imagen = cloudinary.image(novedad.id_img,{
                width: 85, height:85, crop:'fill', 
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
    res.render('admin/novedades', {
        layout: 'admin/layout',
        title: 'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO',
        persona: req.session.nombre,
        novedades
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout',
        title: 'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO'
    })
});

router.post('/agregar', async (req, res, next) => {
    try {
        var id_img = '';
        if(req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen;
            id_img = (await uploader(imagen.tempFilePath)).public_id
        }

        if (req.body.titulo != "" && req.body.fecha != "" && req.body.cuerpo != "") {
            await modelNovedades.insertNovedad({
                ...req.body,
                id_img
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                title: 'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO',
                error: true, alerta: 'Debes completar todos los campos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            title: 'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO',
            error: true, alerta: 'No fué posible subir la novedad'
        });
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    var novedad = await modelNovedades.getNovedadById(id);
    if (novedad.id_img){
        await(destroy(novedad.id_img))
    }
    
    await modelNovedades.deleteNovedadById(id);
    res.redirect('/admin/novedades')
})

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var novedad = await modelNovedades.getNovedadById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        title: 'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO',
        novedad
    });
});

router.post('/modificar', async (req, res, next) => {
    try {
        var id_img = req.body.img_base;
        var borrarimg_vieja = false;

        if(req.body.borrar_img === '1'){
            id_img = null;
            borrarimg_vieja = true
        } else {
            if(req.files && Object.keys(req.files).length >0){
                imagen = req.files.imagen;
                id_img = (await uploader(imagen.tempFilePath)).public_id;
                borrarimg_vieja = true;
            }
        }
        if(borrarimg_vieja && req.body.img_base){
            await(destroy(req.body.img_base));
        }


        let obj = {
            titulo: req.body.titulo,
            fecha: req.body.fecha,
            cuerpo: req.body.cuerpo,
            id_img
        }
        await modelNovedades.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true, alerta: 'No fué posible modificar la novedad'
        })
    }
})


module.exports = router;