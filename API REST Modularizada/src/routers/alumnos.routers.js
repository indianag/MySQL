const {Router} = require ("express")
const router = Router();
const alumnosCtrl = require ("../controller/alumnos.controller")

// Endpoint para mostrar todos los alumnos
router.get("/alumnos", alumnosCtrl.getAlumno);


// Endpoint para obtener un alumno por su ID
router.get("/alumnos/:student_id", alumnosCtrl.getId);

// Endpoint para crear un nuevo alumno
router.post("/alumnos", alumnosCtrl.postAlumno);

// Endpoint para modificar los datos de un alumno
router.put("/alumnos", alumnosCtrl.putAlumno);

// Endpoint para eliminar un alumno
router.delete("/alumnos", alumnosCtrl.deleteAlumno);

module.exports = router;

