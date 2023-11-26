const {Router} = require ("express")
const router = Router();
const asigNotasCtrl = require ("../controller/asig.notas.controller")


// Endpoint para obtener la nota media del alumno por su ID.
router.get("/media/:student_id", asigNotasCtrl.getId);

// Endpoint para mostrar las asignaturas por id del alumno.
router.get("/apuntadas/:student_id", asigNotasCtrl.getAsignatura);

// Endpoint para mostrar todos los alumnos segun condicion
router.get("/apuntadas", asigNotasCtrl.getApuntadas);

// Endpoint para mostrar las asignaturas por id de profesores
router.get("/impartidas/:teacher_id", asigNotasCtrl.getImpartida);

// Endpoint para mostrar los profes por asignatura
router.get("/impartidas", asigNotasCtrl.getProfesores);

module.exports = router;