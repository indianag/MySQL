const mysql = require("mysql2/promise");

async function main()
{
    try
    {
        let connection = await mysql.createConnection({
            host: "localhost",
            user:  "root",
            password: "Andrade.01",
            database: "dia1"
        });
        console.log("Conexion correcta")


        // //Calcular la nota media de los alumnos de la asignatura 1.
        // const sql = 'SELECT AVG(mark) AS avg_mark FROM marks WHERE subject_id = 1';
        // let [result] = await connection.query(sql)
        // console.log("AVG exitosa")
        // console.log(result);


        // // calcular el numero total de alumnos de alumnos en el bootcamp.
        // const sql = 'SELECT COUNT(*) AS total_students FROM students';
        // let [result] = await connection.query(sql)
        // console.log('Número total de estudiantes');
        // console.log(result);
      

        // //listar todos los campos de la tabla groups.
        // const sql = 'DESCRIBE dia1.groups';
        // let [result] = await connection.query(sql)
        // console.log('Descripción obtenida');
        // console.log(result);


        // // Consulta SQL para eliminar registros
        // const sql = 'DELETE FROM marks WHERE mark > 5 AND YEAR(date) = YEAR(CURDATE()) - 1';
        // let [result] = await connection.query(sql)
        // console.log('Número de registros eliminados');
        // console.log(result);


        //  // Consulta SQL para seleccionar registros
        // const sql = 'SELECT * FROM students WHERE year_Entry = YEAR(CURDATE())';
        // let [result] = await connection.query(sql)
        // console.log('Resultados de la consulta');
        // console.log(result);


        // // Consulta SQL para obtener el número de profesores por asignatura
        // const sql = 'SELECT subject_id, COUNT(DISTINCT teacher_id) AS num_teachers FROM subject_teacher GROUP BY subject_id';
        // let [result] = await connection.query(sql)
        // console.log('Número de profesores por asignatura');
        // console.log(result);


        // // Consulta SQL para actualizar el año de ingreso para el estudiante con student_id = 1
        // const update = 'UPDATE students SET year_Entry = 2023 WHERE student_id = 1';
        // let [result] = await connection.query(update)
        // console.log('Actualización exitosa');
        // console.log(result)

        // // Consulta SQL para obtener las notas según las condiciones dadas
        // const selectMarks = 'SELECT mark_id, mark FROM marks WHERE (mark_id BETWEEN 1 AND 20) OR (mark > 8 AND YEAR(date) = YEAR(CURDATE()) - 1)';
        // let [result] = await connection.query(selectMarks)
        // console.log('Notas según las condiciones');
        // console.log(result)

        // // Consulta SQL para obtener la media de notas por asignatura en el último año
        // const avgMarksBySubject = 'SELECT subject_id, AVG(mark) AS Avg_mark FROM marks WHERE YEAR(date) = YEAR(CURDATE()) - 1 GROUP BY subject_id';
        // let [result] = await connection.query(avgMarksBySubject)
        // console.log('Media de notas por asignatura');
        // console.log(result)

        // // Consulta SQL para obtener la media de notas por estudiante en el último año
        // const avgMarksByStudent = 'SELECT student_id, AVG(mark) AS Avg_mark FROM marks WHERE YEAR(date) = YEAR(CURDATE()) - 1 GROUP BY student_id';
        // let [result] = await connection.query(avgMarksByStudent)
        // console.log('Media de notas por estudiante');
        // console.log(result)


        // // Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados.
        // const sql = `SELECT students.first_name AS nombre_alumno, students.Last_name AS apellido_alumno, subjects.title AS nombre_asignatura
        // FROM students
        // JOIN marks ON students.student_id = marks.student_id
        // JOIN subjects ON marks.subject_id = subjects.subject_id`;
        // let [result] = await connection.query(sql)
        // console.log('Datos de los alumnos');
        // console.log(result)


        // //Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.
        // const sql = `SELECT teachers.first_name AS nombre_profesor, teachers.Last_name AS apellido_profesor, subjects.title AS nombre_asignatura
        // FROM teachers
        // JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
        // JOIN subjects ON subject_teacher.subject_id = subjects.subject_id`;
        // let [result] = await connection.query(sql)
        // console.log('Datos de los profesores');
        // console.log(result)

        //     // Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.//
        //     const sql = `
        //     SELECT
        //     subjects.subject_id,
        //     subjects.title AS nombre_asignatura,
        //     teachers.first_name AS nombre_profesor,
        //     teachers.Last_name AS apellido_profesor,
        //     COUNT(marks.student_id) AS total_alumnos
        //   FROM
        //     subjects
        //   JOIN
        //     subject_teacher ON subjects.subject_id = subject_teacher.subject_id
        //   JOIN
        //     teachers ON subject_teacher.teacher_id = teachers.teacher_id
        //   LEFT JOIN
        //     marks ON subjects.subject_id = marks.subject_id
        //   GROUP BY
        //     subjects.subject_id, teachers.teacher_id;`;

        //     let [result] = await connection.query(sql)
        //     console.log('total de alumnos por asignatura y profesor');
        //     console.log(result)



    }
    catch(err)
    {
        console.log(err)
        await connection
    }
}
main();