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
    
        // let sql = "CREATE TABLE direccion (direccion_id INT AUTO_INCREMENT PRIMARY KEY, " + 
        //                                     "calle VARCHAR(200), " +
        //                                     "numero INT, " +
        //                                     "ciudad VARCHAR(60))";
        // let [result] = await connection.query(sql);
        // console.log("Tabla creada");
        // console.log(result);


        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Juan', 'Garcia')";
        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Pedro', 'Castro')";
        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Hildemar', 'Martinez')";
        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Carlos', 'Andrade')";
        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Tomas', 'Cortez')";
        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Diego', 'Culpa')";
        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Isaac', 'Marcano')";
        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Antonio', 'Granado')";
        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Rebeca', 'Brito')";
        // let teachers = "INSERT INTO `dia1`.`teachers` (`first_name`, `Last_name`)" + "VALUES ('Maria', 'Simanca')";

        // let [result] = await connection.query(teachers);       
        // console.log("Profesor Insertado");
        // console.log(result);

        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Matematicas')";
        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Literatura')";
        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Deporte')";
        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Fisica')";
        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Quimica')";
        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Geografia')";
        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Algebra')";
        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Programación')";
        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Música')";
        // let subjects = "INSERT INTO `dia1`.`subjects` (`title`)" + "VALUES ('Inglés')";

        // let [result] = await connection.query(subjects);       
        // console.log("Titulo Insertado");
        // console.log(result);
    
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Ricardo Ortiz',41,'Madrid')";
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Ana López',35,'Barcelona')";
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Juan Martínez',28,'Sevilla')";
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Elena Rodríguez',50,'Valencia')";
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Carlos Pérez',33,'Bilbao')";
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Isabel García',45,'Málaga')";
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Pedro Sánchez',29,'Zaragoza')";
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Laura Fernández',37,'Alicante')";
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Javier Ruiz',26,'Murcia')";
        // let direccion = "INSERT INTO `dia1`.`direccion` (`calle`, `numero`, `ciudad`)" + "VALUES ('Sara Gómez',40,'Valladolid')";
        
        // let [result] = await connection.query(direccion);       
        // console.log("Direccion Insertada");
        // console.log(result);


        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('2', '10', '9')";
        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('5', '1', '3')";
        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('1', '2', '6')";
        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('4', '8', '5')";
        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('9', '9', '10')";
        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('7', '7', '7')";
        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('3', '4', '2')";
        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('6', '3', '1')";
        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('10', '5', '4')";
        // let subject_teacher = "INSERT INTO `dia1`.`subject_teacher` (`subject_id`, `teacher_id`, `group_id`)" + "VALUES ('8', '6', '8')";
        
        // let [result] = await connection.query(subject_teacher);       
        // console.log("relacion Insertada");
        // console.log(result);

        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Carlos', 'perez', '5')";
        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Miguel', 'Torres', '1')";
        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Freddy', 'Martin', '7')";
        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Juana', 'Perez', '9')";
        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Carlota', 'Hernandez', 2)";
        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Tonny', 'Castellanos', '3')";
        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Elvis', 'Andrades', '4')";
        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Mariana', 'Vegas', '7')";
        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Erika', 'Urpin', '10')";
        // let students = "INSERT INTO `dia1`.`students` (`first_name`, `Last_name`, `group_id`)" + "VALUES ('Oddi', 'Granado', '6')";

        // let [result] = await connection.query(students);       
        // console.log("Estudiante Insertado");
        // console.log(result);

        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('4', '8', '2020-06-25', '10')";
        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('2', '4', '2019-10-07', '3')";
        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('9', '3', '2017-07-11', '4')";
        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('7', '6', '2015-02-19', '5')";
        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('1', '9', '2021-05-13', '8')";
        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('10', '1', '2019-12-18', '1')";
        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('8', '5', '2016-03-01', '7')";
        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('5', '2', '2022-04-04', '9')";
        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('6', '7', '2023-10-23', '6')";
        // let marks = "INSERT INTO `dia1`.`marks` (`student_id`, `subject_id`, `date`, `mark`)" + "VALUES ('3', '10', '2016-01-12', '2')";
        
        // let [result] = await connection.query(marks);       
        // console.log("Estudiante Insertado");
        // console.log(result);

        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('Carla')";
        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('Juan')";
        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('Patricia')";
        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('Carmen')";
        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('Diana')";
        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('Rebeca')";
        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('Juan')";
        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('Carlos')";
        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('David')";
        // let groups = "INSERT INTO `dia1`.`groups` (`name`)" + "VALUES ('Tomas')";
       
        // let [result] = await connection.query(groups);       
        // console.log("Estudiante Insertado");
        // console.log(result);

        //Para añadir una columna en mySQL//
        // ALTER TABLE direccion
        // ADD COLUMN nueva_columna VARCHAR(255);

        // //Para borrar una columna en mySQL//
        // ALTER TABLE direccion
        // DROP COLUMN ciudad;


        // Añadir una columna en tabla de direccion                                      ////////////////////////*************************** */
        // const addColumn = 'ALTER TABLE direccion ADD COLUMN nueva_columna VARCHAR(255)';
        // let [result] = await connection.query(addColumn);
        // console.log('Columna añadida');
        // console.log(result);

        // Borrar una columna en tabla de direccion
        // const dropColumn = "ALTER TABLE direccion DROP COLUMN nueva_columna";
        //     let [result] = await connection.query(dropColumn);
        // console.log('Columna eliminada');
        // console.log(result);                                                /////////////////*************************************** */




        //Para BORRAR una tabla//
        // let sql = "DROP TABLE direccion"
        // let [result] = await connection.query(sql);
        // console.log("Tabla Eliminada");
        // console.log(result);

        //Para ELIMINAR una tabla//
        // let sql = "DELETE FROM direccion"
        // let [result] = await connection.query(sql);
        // console.log("Datos Borrados");
        // console.log(result);

        // Actualizar notas de estudiantes a 0                
        // const update = 'UPDATE marks SET mark = 0';
        //    let [result] = await connection.query(update);

        // console.log('Notas actualizadas con éxito');
        // console.log(result);                 //***************************************************************** */
    
        

        //Para mostrar los datos solicitados                                        ///////******************************************** */
        // let sql = "SELECT first_name, Last_name from students";
        // let [result] = await connection.query(sql);
        // console.log("Datos Obtenidos");
        // console.log(result);


        //Consulta para obtener todos los datos de una tabla                   ///////************************************** */
        // const select = 'SELECT * FROM teachers';
        // let [result] = await connection.query(select)
        // console.log('Datos de la tabla:');
        // console.log(result);

        // // Obtener la fecha actual menos 10 años en formato 'YYYY-MM-DD'                    ////************************************** */
        // const fechaLimite = new Date();
        // fechaLimite.setFullYear(fechaLimite.getFullYear() - 10);
        // const fechaLimiteFormatoSQL = fechaLimite.toISOString().split('T')[0];
        // console.log(fechaLimiteFormatoSQL);

        // // Eliminar notas con más de 10 años
        // const deleteQuery = `DELETE FROM marks WHERE date < '${fechaLimiteFormatoSQL}'`;
        // let [result] = await connection.query(deleteQuery);
        // console.log('Notas eliminadas con fecha mayor a 10 años');
        // console.log(result);


        // // Actualizar las notas de los alumnos según la condición dada
        // const updateQuery = 'UPDATE marks SET mark = 5 WHERE mark < 5';
        // let [result] = await connection.query(updateQuery);
        // console.log(result);
        // console.log('Notas actualizadas según la condición');   ////////**************************************************** */




    }
    catch(err)
    {
        console.log(err)
        await connection
    }
}
main();

