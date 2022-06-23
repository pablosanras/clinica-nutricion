// Importo el módulo de mongoose
import mongoose from "mongoose"

// Creo la constante que va a ser el modelo de la base de datos
const DatosSchema = new mongoose.Schema(
  {
    "dni": {
      type: String,
      required: true,
    },
    "nombre": {
      type: String,
      required: true,
    },
    "apellidos": {
      type: String,
      required: true,
    },
    "fechaNacimiento": {
      type: String,
      required: true,
    },
    "sexo": {
      type: String,
      required: true,
    },
    "telefono": {
      type: String,
      required: true,
    },
    "direccion": {
      type: String,
      required: true,
    },
    "correo": {
      type: String,
      required: true,
    },
    "altura": {
      type: Number,
      required: true,
    },
    "pesoIdeal": {
      type: Number,
      required: true,
    },
    "actividadFisica": {
      type: String,
      required: true,
    },
    
    "enfermedades": [
      {
        "obesidad": {
          type: String,
          required: true,
        },

        "diabetes": {
          type: String,
          required: true,
        },
        "hipertension": {
          type: String,
          required: true,
        },
        "cardiopatias": {
          type: String,
          required: true,
        },
        "cancer": {
          type: String,
          required: true,
        },
        "alergias": {
          type: String,
          required: true,
        },
        "hepatitis": {
          type: String,
          required: true,
        },
        "hipotiroidismo": {
          type: String,
          required: true,
        },
        "hipertiroidismo": {
          type: String,
          required: true,
        }
      }
    ],
    "observaciones": {
      type: String,
      required: false,
    },
  },
  {
    strict: false,
  }
)

// Métodos estáticos
DatosSchema.statics.getById = function(id) {
  return this.findOne({ _id: id })
    .lean()
    .exec()
}

DatosSchema.statics.getAll = function() {
  return this.find()
  .exec()
}

// Exporto el modelo
export default DatosSchema
