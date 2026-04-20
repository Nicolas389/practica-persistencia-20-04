const {Router} = require('express') 
const {getProfesores , getProfesoresById} = require('../controllers/profesores.controller')

const route = Router()

route.get('/profesores', getProfesores)
route.get('/profesores/:id', getProfesoresById)


module.exports = route