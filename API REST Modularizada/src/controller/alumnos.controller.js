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




















// // Endpoint para obtener un libro por su ID
// function getBookId(request, response) {
  
//   const idBook = books.find(book => book.id_book == parseInt(request.params.id));
// console.log(request.params.id)
//   console.log(idBook)

  
//   if (!idBook) {
//     // const bookId = books.splice(index, 1);
//     // console.log(bookId)
//     response.send({ error: true, codigo: 200, mensaje: "Libro no encontrado"}, books);
//   } else {
//     response.send({ error: false, codigo: 200, mensaje: "Libro encontrado", books: [idBook]});
//   }
// }













// let books = [{id_book:1, id_user:1, title:"text 1", type:"tapa 1", author:"Pedro", price:12, photo:"https://th.bing.com/th/id/OIP.oneRz_hbiSZZw6s69j3mlQHaLZ?rs=1&pid=ImgDetMain"},
//             {id_book:2, id_user:2, title:"text 2", type:"tapa 2", author:"Pepe", price:25, photo:"https://th.bing.com/th/id/OIP.VPA8zvYQJv5exp-K82w4LAHaKN?rs=1&pid=ImgDetMain"},
//             {id_book:3, id_user:3, title:"text 3", type:"tapa 3", author:"Pablo", price:15, photo:"https://th.bing.com/th/id/OIP.FEfcG8M0ZRxYvA9_Bqd1_AAAAA?w=180&h=271&rs=1&pid=ImgDetMain"}];

// // Endpoint para Iniciar
// function getStart(request, response){
//     let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
//     response.send(respuesta);
// }

// // Endpoint para obtener todos los libros
// function getBooks(request, response){
//   let respuesta = {error: true, codigo: 200, mensaje: 'todos los libros', books};
//   response.send(respuesta)
// }
// // Endpoint para obtener un libro por su ID
// function getBookId(request, response) {
  
//   const idBook = books.find(book => book.id_book == parseInt(request.params.id));
// console.log(request.params.id)
//   console.log(idBook)

  
//   if (!idBook) {
//     // const bookId = books.splice(index, 1);
//     // console.log(bookId)
//     response.send({ error: true, codigo: 200, mensaje: "Libro no encontrado"}, books);
//   } else {
//     response.send({ error: false, codigo: 200, mensaje: "Libro encontrado", books: [idBook]});
//   }
// }

// // Endpoint para crear un nuevo libro y agregarlo al array de libros
// function postBook(request, response){
//   let respuesta;
//   console.log(request.body)
//   if (!books.some(book => book.id_book == request.body.id_book )){
//     books.push(request.body);
//     respuesta = {error: false, codigo: 200, mensaje: "libro creado", books}
//     }
//   else {
//     respuesta = { error: true, codigo: 200, mensaje: "libro ya existe", book:null};
//   }
//     response.send(respuesta);
   
// }
// // Endpoint para modificar los datos de un libro
// function putBook(request, response){  
//     const { id_book, id_user, title, type, author, price, photo } = request.body;
//     const bookToUpdate = books.find(book => book.id_book == id_book);
//   if (bookToUpdate) {
//     bookToUpdate.id_user = id_user;
//     bookToUpdate.title = title;
//     bookToUpdate.type = type;
//     bookToUpdate.author = author; 
//     bookToUpdate.price = price;
//     bookToUpdate.photo = photo;
//     respuesta = { error: true, codigo: 200, mensaje: "Libro actualizado ", bookToUpdate}
//   } else {
//     respuesta = { error: false, codigo: 200, mensaje: "el libro no existe"}
//   }
//   response.send(respuesta);
// }
// // Endpoint para eliminar un libro
// function deleteBook(request, response){
//   console.log(request.body);
//       const { id } = request.body;
//       console.log(id);

//       const index = books.findIndex(book => book.id_book == id);
//       console.log(index);

//   if (index !== -1) {
//     const deletedBook = books.splice(index, 1);
//     console.log(deletedBook);
//     respuesta = { error: true, codigo: 200, mensaje: "Libro eliminado", deletedBook}
//   } else {
//     respuesta = { error: false, codigo: 200, mensaje: "El libro no existe", book: null}
//   }
//   response.send(respuesta);
// }

// function listenBook(){
//     console.log(`Servidor web escuchando en http://localhost:${port}`);
// }



