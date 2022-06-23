// Importo el modelo mediciones de los modelos
import { Dieta } from '../models'


// Class que contiene los métodos para la API de mediciones
class DietaController{
    async dieta(req, res, next){
        const data = await Dieta().getAll()

        return res
            .status(200)
            .json(data)
    }

    async dietaPaciente(req, res, next){
        const data = await Dieta()
            .find(
                { idPaciente: req.params.idPaciente }
            )

        return res
            .status(200)
            .json(data)
    }

    async dietaId(req, res, next){
        const data = await Dieta().getById(req.params.id)

        return res
            .status(200)
            .json(data)
    }

    async anadirDieta(req, res, next){
        const nuevosDieta = Dieta() ({
            "idPaciente": req.body.idPaciente,
            "lunesDesayuno": req.body.lunesDesayuno,
            "lunesAlmuerzo": req.body.lunesAlmuerzo,
            "lunesComida": req.body.lunesComida,
            "lunesMerienda": req.body.lunesMerienda,
            "lunesCena": req.body.lunesCena,
            "martesDesayuno": req.body.martesDesayuno,
            "martesAlmuerzo": req.body.martesAlmuerzo,
            "martesComida": req.body.martesComida,
            "martesMerienda": req.body.martesMerienda,
            "martesCena": req.body.martesCena,
            "miercolesDesayuno": req.body.miercolesDesayuno,
            "miercolesAlmuerzo": req.body.miercolesAlmuerzo,
            "miercolesComida": req.body.miercolesComida,
            "miercolesMerienda": req.body.miercolesMerienda,
            "miercolesCena": req.body.miercolesCena,
            "juevesDesayuno": req.body.juevesDesayuno,
            "juevesAlmuerzo": req.body.juevesAlmuerzo,
            "juevesComida": req.body.juevesComida,
            "juevesMerienda": req.body.juevesMerienda,
            "juevesCena": req.body.juevesCena,
            "viernesDesayuno": req.body.viernesDesayuno,
            "viernesAlmuerzo": req.body.viernesAlmuerzo,
            "viernesComida": req.body.viernesComida,
            "viernesMerienda": req.body.viernesMerienda,
            "viernesCena": req.body.viernesCena,
            "sabadoDesayuno": req.body.sabadoDesayuno,
            "sabadoAlmuerzo": req.body.sabadoAlmuerzo,
            "sabadoComida": req.body.sabadoComida,
            "sabadoMerienda": req.body.sabadoMerienda,
            "sabadoCena": req.body.sabadoCena,
            "domingoDesayuno": req.body.domingoDesayuno,
            "domingoAlmuerzo": req.body.domingoAlmuerzo,
            "domingoComida": req.body.domingoComida,
            "domingoMerienda": req.body.domingoMerienda,
            "domingoCena": req.body.domingoCena,
        })

        const data = await nuevosDieta.save()

        return res
            .status(201)
            .json(data)
    }

    async editarDieta(req, res, next){
        const nuevosDieta = {
            "idPaciente": req.body.idPaciente,
            "lunesDesayuno": req.body.lunesDesayuno,
            "lunesAlmuerzo": req.body.lunesAlmuerzo,
            "lunesComida": req.body.lunesComida,
            "lunesMerienda": req.body.lunesMerienda,
            "lunesCena": req.body.lunesCena,
            "martesDesayuno": req.body.martesDesayuno,
            "martesAlmuerzo": req.body.martesAlmuerzo,
            "martesComida": req.body.martesComida,
            "martesMerienda": req.body.martesMerienda,
            "martesCena": req.body.martesCena,
            "miercolesDesayuno": req.body.miercolesDesayuno,
            "miercolesAlmuerzo": req.body.miercolesAlmuerzo,
            "miercolesComida": req.body.miercolesComida,
            "miercolesMerienda": req.body.miercolesMerienda,
            "miercolesCena": req.body.miercolesCena,
            "juevesDesayuno": req.body.juevesDesayuno,
            "juevesAlmuerzo": req.body.juevesAlmuerzo,
            "juevesComida": req.body.juevesComida,
            "juevesMerienda": req.body.juevesMerienda,
            "juevesCena": req.body.juevesCena,
            "viernesDesayuno": req.body.viernesDesayuno,
            "viernesAlmuerzo": req.body.viernesAlmuerzo,
            "viernesComida": req.body.viernesComida,
            "viernesMerienda": req.body.viernesMerienda,
            "viernesCena": req.body.viernesCena,
            "sabadoDesayuno": req.body.sabadoDesayuno,
            "sabadoAlmuerzo": req.body.sabadoAlmuerzo,
            "sabadoComida": req.body.sabadoComida,
            "sabadoMerienda": req.body.sabadoMerienda,
            "sabadoCena": req.body.sabadoCena,
            "domingoDesayuno": req.body.domingoDesayuno,
            "domingoAlmuerzo": req.body.domingoAlmuerzo,
            "domingoComida": req.body.domingoComida,
            "domingoMerienda": req.body.domingoMerienda,
            "domingoCena": req.body.domingoCena,
        }

        const data = await Dieta()
            .findOneAndUpdate(
                { idPaciente: req.body.idPaciente }, 
                nuevosDieta
            )

        return res
            .status(200)
            .json(nuevosDieta)
    }

    async borrarDieta(req, res, next){
        const data = await Dieta()
            .findOneAndRemove(
                { _id: req.params.id }
            )

        return res
            .status(200)
            .json(data)
    }
}

// Exporto el controlador
export default new DietaController()