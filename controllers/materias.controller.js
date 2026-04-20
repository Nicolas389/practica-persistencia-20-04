const getMaterias = (_,res)=>{
    res.status(200).json({mensaje : 'aca van las materias'})
}

const getMateriasById = (req,res) =>{
    const id = req.params.id
    res.status(200).json({id})
}


module.exports = {getMaterias, getMateriasById}