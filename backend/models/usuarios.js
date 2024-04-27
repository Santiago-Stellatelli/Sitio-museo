var pool= require('./basedatos');
var md5 = require('md5')

async function getUsuarioyContraseña(usuario, contraseña){
    try{
        var query = 'select * from usuarios where usuario= ? and contraseña = ? limit 1';
        var rows = await pool.query(query,[usuario, md5(contraseña)]);
        return rows[0];
    } catch(error){
        console.log(error);
    }
}

module.exports = {getUsuarioyContraseña}