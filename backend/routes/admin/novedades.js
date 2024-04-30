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

router.get('/agregar', (req,res,next)=>{
    res.render('admin/agregar',{
        layout: 'admin/layout',
        title:'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO'
    })
});

router.post('/agregar', async (req,res,next)=>{
    try{
        if(req.body.titulo !="" && req.body.fecha !="" && req.body.cuerpo !=""){
            await modelNovedades.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        } else{
            res.render('admin/agregar',{
                layout: 'admin/layout',
                title:'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO',   
                error: true, alerta:'Debes completar todos los campos'
            })
        }
    } catch (error){
        console.log(error)
        res.render('admin/agregar',{
            layout: 'admin/layout',
            title:'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO',   
            error: true, alerta:'No fué posible subir la novedad'   
        });
    }
});


module.exports = router;