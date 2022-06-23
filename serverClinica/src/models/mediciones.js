// Importo el módulo de mongoose
import mongoose from 'mongoose'

// Creo la constante que va a ser el modelo de la base de datos
const MedicionSchema = new mongoose.Schema(
    {

        "paciente": {
            type: String,
            required: true
        },
        "fecha": {
            type: String,
            required: true
        },
        "peso": {
            type: Number,
            required: true
        },
        "circunferenciCadera": {
            type: Number,
            required: true
        },
        "circunferenciaCintura": {
            type: Number,
            required: true
        },
        "grasaCorporal": {
            type: Number,
            required: true
        },
        "masaMagra": {
            type: Number,
            required: true
        },
        "aguaCorporal": {
            type: Number,
            required: true
        },
        "resistenciaOhmios": {
            type: Number,
            required: true
        },
        "perimetroBrazo": {
            type: Number,
            required: true
        },
        "imc": {
            type: Number,
            required: true
        },
    },
    {
        strict: false
    }
)

// Métodos estáticos
MedicionSchema.statics.getById = function(id) {
    return this.findOne({ _id: id })
    .lean()
    .exec()
}

MedicionSchema.statics.getPaciente = function(pacient) {
    return this.findOne({ paciente: pacient })
    .lean()
    .exec()
}

MedicionSchema.statics.getAll = function() {
    return this.find()
    .exec()
}

// Exporto el modelo
export default MedicionSchema