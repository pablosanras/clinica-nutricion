// Importo el módulo de mongoose
import mongoose from 'mongoose'

// Creo la constante que va a ser el modelo de la base de datos
const LoginSchema = new mongoose.Schema(
    {
        "nombre" : { 
            type: String, 
            required: true 
        },
        "usuario" : { 
            type: String, 
            required: true 
        },
        "contrasena" : { 
            type: String, 
            required: true 
        },
        "idPaciente" : { 
            type: String, 
            required: true
        }
    },
    {
        strict: false
    }
)

// Métodos estáticos
LoginSchema.statics.getById = function(id) {
    return this.findOne({ _id: id })
    .lean()
    .exec()
}

LoginSchema.statics.getAll = function() {
    return this.find()
    .exec()
}

// Exporto el modelo
export default LoginSchema