var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuarios');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout',
        title: 'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO'
    });
});

router.post('/', async(req,res,next)=>{
    try{
        var usuario = req.body.usuario;
        var contraseña = req.body.contraseña;

        var data = await usuariosModel.getUsuarioyContraseña(usuario, contraseña);

        if(data != undefined){

            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('/admin/novedades');
        } else{
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true,
                title: 'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO'
            });
        }
    } catch (error){
        console.log(error);
    }

});

router.get('/logout', function(req, res, next){
    req.session.destroy();
    res.redirect('/admin/login')
});

module.exports = router;
