const { request, response } = require('../app');
const { pool } = require('../database')



//Obtiener la nota media del id del alumno pasado por parámetro, elegir cualquiera de los dos formatos. 

const getId = async (request, response) =>
{
    try
    {
        let sql;
        if(request.params.student_id == null)
            sql = "SELECT * FROM students";
        else
        sql = "SELECT AVG(mark) AS avg_mark FROM marks WHERE student_id=" + request.params.student_id;
        // console.log(sql)
        let [result] = await pool.query(sql);
        response.send(result);
        console.log(result)
    }
    catch(error)
    {
        console.log(error);
    }
}


//La lista de las asignaturas a la que están apuntadas el alumno del id pasado 
//por parámetro, elegir cualquiera de los dos formatos.

const getAsignatura = async (request, response) =>
{
    try {
        let sql = "SELECT subjects.subject_id, subjects.title FROM marks JOIN subjects ON marks.subject_id = subjects.subject_id WHERE marks.student_id=" + request.params.student_Id;
    
        let [result] = await pool.query(sql);
        response.send(result);
      } 
      catch(error)
      {
        console.error(error);
      }
}


//Devolver los nombres y apellidos de todos los alumnos y los nombres de las  asignaturas a la que están apuntadas.
const getApuntadas = async (request, response) =>
{
    try
    {
        let sql = `SELECT students.first_name, students.last_name, subjects.title AS subject_title
                    FROM students
                    JOIN marks ON students.student_id = marks.student_id
                    JOIN subjects ON marks.subject_id = subjects.subject_id`;
        let [result] = await pool.query(sql);
        response.send(result);
    }
    catch(error)
    {
        console.log(error)
    }
}


// Consultar La lista de las asignaturas que imparte el profesor cuyo
//id es pasado por parámetro.
const getImpartida = async (request, response) =>
{
    try
    {
        let sql = `SELECT subjects.subject_id, subjects.title
                    FROM subjects
                    JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
                    WHERE subject_teacher.teacher_id=` + request.params.teacher_id;
        let [result] = await pool.query(sql);
        response.send(result);
    }
    catch(error)
    {
        console.log(error)
    }
}


//Devolver los nombres y apellidos de todos los profesores y los nombres de las
//asignaturas a la que imparten.
const getProfesores = async (request, response) =>
{
    try
    {
        let sql = `SELECT teachers.first_name, teachers.last_name, subjects.title AS subject_title
                    FROM teachers
                    JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
                    JOIN subjects ON subject_teacher.subject_id = subjects.subject_id`;
        let [result] = await pool.query(sql);
        response.send(result);
    }
    catch(error)
    {
        console.log(error)
    }
}







module.exports = {
    getId,
    getAsignatura,
    getApuntadas,
    getImpartida,
    getProfesores,
};