const mysql = require("mysql2/promise");

async function main()
{
    try
    {
        let connection = await mysql.createConnection({
            host: "localhost",
            user:  "root",
            password: "Andrade.01",
            database: "proyectomuseo"
        });
        console.log("Conexion correcta")


        // const sql = `
        // SELECT
        //   piezas.nombre_pieza,
        //   piezas.localizacion,
        //   piezas.devolucion AS fecha_expiracion,
        //   duenyo.nombre_duenyo,
        //   duenyo.apellido_duenyo,
        //   duenyo.email_duenyo
        // FROM
        //   piezas
        // JOIN
        //   duenyo ON piezas.id_duenyo = duenyo.id_duenyo
        // WHERE
        //   piezas.estado = 'Prestamo';
        // `;
      
        // let [result] = await connection.query(sql)
        // console.log('Listado de piezas en préstamo:');
        // console.log(result);

        // const sql = `
        // SELECT
        //     formato AS situacion,
        //     COUNT(*) AS total_piezas
        // FROM
        //     piezas
        // GROUP BY
        //     formato
        // ORDER BY
        //     total_piezas DESC;         
        // `;
      
        // let [result] = await connection.query(sql)
        // console.log('Total de piezas segun Formato');
        // console.log(result);


    }
    catch(err)
    {
        console.log(err)
        await connection
    }
}
main();