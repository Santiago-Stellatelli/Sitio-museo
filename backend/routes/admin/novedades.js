var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        title: 'MUSEO DE LA ASOCIACIÓN VECINAL DE FOMENTO EL MARTILLO',
        persona: req.session.nombre
    });
});

module.exports = router;