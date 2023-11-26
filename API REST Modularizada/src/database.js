const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user:  "root",
    password: "Andrade.01",
    database: "dia1",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0
    }).promise();

console.log("Conexion con la BBDD Creada");

module.exports = {pool};














// const mysql = require("mysql2/promise");

// async function main()
// {
//     try
//     {
//         let connection = await mysql.createConnection({
//             host: "localhost",
//             user:  "root",
//             password: "Andrade.01",
//             database: "dia1",
//             waitForConnections: true,
//             connectionLimit: 10,
//             maxIdle: 10,
//             idleTimeout: 60000,
//             queueLimit: 0
//             }).promise();
//         console.log("Conexion correcta")
//     }
//     catch(err)
//     {
//         console.log(err)
//         await connection
//     }
// }
// main();