var pool = require('./basedatos');

async function getNovedades(){

    var query = "select * from novedades";
    var contenido = await pool.query(query);
    return contenido;
}


async function insertNovedad(obj){
    try{
        var query = "insert into novedades set ?";
        var contenido = await pool.query(query,[obj]);
        return contenido;
    } catch (error){
        console.log (error);
        throw error;
    }

}

async function deleteNovedadById(id){
    var query = 'delete from novedades where id =?';
    var contenido = await pool.query(query, [id]);
    return contenido;

}

async function getNovedadById(id){
    var query = 'select * from novedades where id = ?';
    var contenido = await pool.query(query,[id]);
    return contenido[0];
}

async function modificarNovedadById(obj,id){
    try{
        var query = 'update novedades set ? where id=?';
        var contenido = await pool.query(query,[obj, id]);
        return contenido;
    } catch (error){
        throw error;
    }
}
module.exports = {getNovedades, insertNovedad, deleteNovedadById, getNovedadById, modificarNovedadById}