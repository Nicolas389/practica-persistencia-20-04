const [Materia] = require('../models')

const getMaterias = async (_,res)=>{
    const materias = Materia.findAll({})
    res.status(200).json(materias)
}

const getMateriasById = (req,res) =>{
    const id = req.params.id
    res.status(200).json({id})
}


module.exports = {getMaterias, getMateriasById}