const {Router} = require('express') /* desestructurar, traer solo una parte del objeto*/ 
const {getMaterias ,getMateriasById} = require('../controllers/materias.controller')

const route = Router()

route.get('/materia', getMaterias)
route.get('/materia/:id', getMateriasById)

module.exports = route 