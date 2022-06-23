// Importo el modelo mediciones de los modelos
import { Mediciones } from '../models'

// Class que contiene los métodos para la API de mediciones
class MedicionesController{
    // Método que devuelve todos las mediciones de los pacientes
    async mediciones(req, res, next){
        const data = await Mediciones().getAll()

        return res
            .status(200)
            .json(data)
    }

    // Método que devuelve todas las mediciones de un paciente
    async medicionesPaciente(req, res, next){
        const data = await Mediciones()
            .find(
                { paciente: req.params.paciente }
            )  

        return res
            .status(200)
            .json(data)
    }

    // Método que devuelve una medición de un paciente
    async consultarMedicionesId(req, res, next){
        const data = await Mediciones()
            .find(
                { _id: req.params.id }
            )

        return res 
            .status(200)
            .json(data)
    }

    // Método que añade una medición a un paciente
    async anadirMedicion(req, res, next){
        const nuevaMedicion = Mediciones() ({
            "paciente": req.body.paciente,
            "fecha": req.body.fecha,
            "peso": req.body.peso,
            "circunferenciCadera": req.body.circunferenciCadera,
            "circunferenciaCintura": req.body.circunferenciaCintura,
            "grasaCorporal": req.body.grasaCorporal,
            "masaMagra": req.body.masaMagra,
            "aguaCorporal": req.body.aguaCorporal,
            "resistenciaOhmios": req.body.resistenciaOhmios,
            "perimetroBrazo": req.body.perimetroBrazo,
            "imc": req.body.imc
        })

        const data = await nuevaMedicion.save()

        return res
            .status(201)
            .json(data)
    }

    // Método que actualiza una medición de un paciente
    async editarMedicion(req, res, next){
        const nuevaMedicion = {
            "paciente": req.body.paciente,
            "fecha": req.body.fecha,
            "peso": req.body.peso,
            "circunferenciCadera": req.body.circunferenciCadera,
            "circunferenciaCintura": req.body.circunferenciaCintura,
            "grasaCorporal": req.body.grasaCorporal,
            "masaMagra": req.body.masaMagra,
            "aguaCorporal": req.body.aguaCorporal,
            "resistenciaOhmios": req.body.resistenciaOhmios,
            "perimetroBrazo": req.body.perimetroBrazo,
            "imc": req.body.imc
        }

        const data = await Mediciones()
            .findOneAndUpdate(
                { _id: req.params.id }, 
                nuevaMedicion
            )

        return res
            .status(200)
            .json(nuevaMedicion)
    }

    // Método que borra una medición de un paciente
    async borrarMedicion(req, res, next){
        const data = await Mediciones()
            .findOneAndRemove(
                { _id: req.params.id }
            )

        return res
            .status(200)
            .json(data)
    }
}

// Exporto el controlador
export default new MedicionesController()