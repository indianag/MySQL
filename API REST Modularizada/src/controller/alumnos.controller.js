const { request, response } = require('../app');
const { pool } = require('../database')

//insertar querys necesarias....................................


// Endpoint para Iniciar

const getAlumno = async (request, response) =>
{
    try
    {
        let sql;
        if(request.query.id == null)
            sql = "SELECT * FROM students";
        else 
            sql = "SELECT * FROM students WHERE id=" + request.query.id;

        let [result] = await pool.query(sql);

        response.send(result);
    }
    catch(err)
    {
        console.log(err);
    }
}

const getId = async (request, response) =>
{
    try
    {
        let sql = "SELECT * FROM students WHERE student_id=" + request.params.student_id;
        // console.log(sql);

        let [result] = await pool.query(sql);
        response.send(result);
    }
    catch(error)
    {
        console.log(error);
    }
}

const postAlumno = async (request, response) => 
{
    try
    {
        console.log(request.body);
        let sql = "INSERT INTO students (first_name, Last_name, group_id, year_Entry)" +
                                "VALUES ('"+request.body.first_name+"','"+ 
                                                request.body.Last_name+"','"+ 
                                                request.body.group_id+"','"+ 
                                                request.body.year_Entry+"')";

        console.log(sql);
        let [result] = await pool.query(sql);
        console.log(result);

        if(result.insertId)
            response.send(String(result.insertId));
        else
        response.send("-1");
    }
    catch(error)
    {
        console.log(error)
    }
}

const putAlumno = async (request, response) =>
{
    try
    {
        // console.log(request.body);
        let params = [request.body.first_name,
                    request.body.Last_name,
                    request.body.group_id,
                    request.body.year_Entry,
                    request.body.student_id]

            let sql = "UPDATE students SET first_name = COALESCE(?, first_name),"+
                    "Last_name = COALESCE(?, Last_name),"+
                    "group_id = COALESCE(?, group_id),"+
                    "year_Entry = COALESCE(?, year_Entry) WHERE student_id = ?";
                console.log(sql);
                let [result] = await pool.query(sql, params);
                response.send(result);
    }
    catch(error)
    {
        console.log(error)
    }
}

const deleteAlumno = async(request, response) =>
{
    try
    {
        console.log(request.body);
        let sql = "DELETE FROM students WHERE student_id = ?";
        console.log(sql);
        let [result] = await pool.query(sql,[request.body.student_id]);
        response.send(result);
    }
    catch(error)
    {
        console.log(error)
    }
}


module.exports = {
    getAlumno,
    getId,
    postAlumno,
    putAlumno,
    deleteAlumno,
};



