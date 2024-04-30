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

module.exports = {getNovedades, insertNovedad, deleteNovedadById}