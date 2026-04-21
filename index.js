const app = require('express')() /* se puede hacer asi o guardando express en una const y ejecutarla en otra */
const PORT = 3000
const materiasRoute = require('./routes/materias.route')
const profesoresRoute = require('./routes/profesores.route')
const {sequelize} = require('./models')

app.use(materiasRoute)
app.use(profesoresRoute)

app.listen(PORT, (err) => {
    if(err){
        console.error(err.message)
        process.exit(1)
    }
    sequelize.sync({force:true})
    console.log(`Aplicacion escuchando en puerto ${PORT}`)
})

app.get('/', (req,res) =>{
    res.status(200).json({message: 'hola mundo'})

    /*send('<h1>Hola Mundo</h1>')*/
})