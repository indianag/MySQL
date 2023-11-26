const express = require("express")
const cors = require('cors')
const errorHandling = require("./error/errorHandling")
const alumnosRouter = require('./routers/alumnos.routers')
const asigNotasRouter = require('./routers/asig.notas.routers')

const app = express();


app.set("port", process.env.PORT || 3000)


app.use(cors());
// app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(alumnosRouter);
app.use(asigNotasRouter);
app.use(function(request, response, next)
{
    response.status(404).json({message: "Endpoint doesnt found"})
})

app.use(errorHandling);

module.exports = app;