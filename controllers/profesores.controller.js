const getProfesores = (_,res)=>{
    res.status(200).json({mensaje : 'aca van los profesores'})
}

const getProfesoresById = (req,res)=>{
    const id = req.params.id

    res.status(200).json({ mesagge: `profesor con id ${id}`})
}

module.exports = {getProfesores, getProfesoresById}