var express = require('express');
var router = express.Router();
var modelNovedades = require('../../models/novedades');


/* GET home page. */
router.get('/', async function (req, res, next) {
    var novedades = await modelNovedades.getNovedades();
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
        if (req.body.titulo != "" && req.body.fecha != "" && req.body.cuerpo != "") {
            await modelNovedades.insertNovedad(req.body);
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
        let obj = {
            titulo: req.body.titulo,
            fecha: req.body.fecha,
            cuerpo: req.body.cuerpo
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