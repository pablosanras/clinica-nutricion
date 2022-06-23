// Importo el modelo mediciones de los modelos
import { Datos } from '../models'

// Class que contiene los métodos para la API de mediciones
class DatosController{
    // Método que devuelve todos los datos de los pacientes
    async datos(req, res, next){
        const data = await Datos().getAll()

        return res
            .status(200)
            .json(data)
    }

    // Método que devuelve todos los datos de un paciente
    async datosId(req, res, next){
        const data = await Datos().getById(req.params.id)

        return res
            .status(200)
            .json(data)
    }

    // Método para añadir un nuevo paciente
    async anadirDatos(req, res, next){
        const nuevosDatos = Datos() ({
            "dni": req.body.dni,
            "nombre": req.body.nombre,
            "apellidos": req.body.apellidos,            
            "fechaNacimiento": req.body.fechaNacimiento,
            "sexo": req.body.sexo,
            "telefono": req.body.telefono,
            "direccion": req.body.direccion,
            "correo": req.body.correo,
            "altura": req.body.altura,
            "pesoIdeal": req.body.pesoIdeal,
            "actividadFisica": req.body.actividadFisica,
            "enfermedades":[
                {
                    "obesidad": req.body.obesidad,
                    "diabetes": req.body.diabetes,
                    "hipertension": req.body.hipertension,
                    "cardiopatias": req.body.cardiopatias,
                    "cancer": req.body.cancer,
                    "alergias": req.body.alergias,
                    "hepatitis": req.body.hepatitis,
                    "hipotiroidismo": req.body.hipotiroidismo,
                    "hipertiroidismo": req.body.hipertiroidismo,     
                }
            ],
            "observaciones": req.body.observaciones,
        })

        const data = await nuevosDatos.save()

        return res
            .status(201)
            .json(data)
    }

    // Método para editar un paciente
    async editarDatos(req, res, next){
        const nuevosDatos = {
            "dni": req.body.dni,
            "nombre": req.body.nombre,
            "apellidos": req.body.apellidos,            
            "fechaNacimiento": req.body.fechaNacimiento,
            "sexo": req.body.sexo,
            "telefono": req.body.telefono,
            "direccion": req.body.direccion,
            "correo": req.body.correo,
            "altura": req.body.altura,
            "pesoIdeal": req.body.pesoIdeal,
            "actividadFisica": req.body.actividadFisica,
            "enfermedades":[
                {
                    "obesidad": req.body.obesidad,
                    "diabetes": req.body.diabetes,
                    "hipertension": req.body.hipertension,
                    "cardiopatias": req.body.cardiopatias,
                    "cancer": req.body.cancer,
                    "alergias": req.body.alergias,
                    "hepatitis": req.body.hepatitis,
                    "hipotiroidismo": req.body.hipotiroidismo,
                    "hipertiroidismo": req.body.hipertiroidismo,     
                }
            ],
            "observaciones": req.body.observaciones,
        }

        const data = await Datos()
            .findOneAndUpdate(
                { _id: req.params.id }, 
                nuevosDatos
            )

        return res
            .status(200)
            .json(nuevosDatos)
    }
    
    // Método para validar el DNI del paciente
    async validarDNI(req, res, next){
        const data = await Datos()
            .findOne(
                { dni: req.params.dni }
            )

        return res
            .status(200)
            .json(data)
    }

    // Método para borrar un paciente
    async borrarDatos(req, res, next){
        const data = await Datos()
            .findOneAndRemove(
                { _id: req.params.id }
            )

        return res
            .status(200)
            .json(data)
    }
}

// Exporto el controlador
export default new DatosController()