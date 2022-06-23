// Importo el módulo de mongoose
import mongoose from "mongoose"

// Creo la constante que va a ser el modelo de la base de datos
const DietaSchema = new mongoose.Schema(
  {
    "idPaciente": { type: String, required: true },
    "lunesDesayuno": { type: String, required: true },
    "lunesAlmuerzo": { type: String, required: true },
    "lunesComida": { type: String, required: true },
    "lunesMerienda": { type: String, required: true },
    "lunesCena": { type: String, required: true },
    "martesDesayuno": { type: String, required: true },
    "martesAlmuerzo": { type: String, required: true },
    "martesComida": { type: String, required: true },
    "martesMerienda": { type: String, required: true },
    "martesCena": { type: String, required: true },
    "miercolesDesayuno": { type: String, required: true },
    "miercolesAlmuerzo": { type: String, required: true },
    "miercolesComida": { type: String, required: true },
    "miercolesMerienda": { type: String, required: true },
    "miercolesCena": { type: String, required: true },
    "juevesDesayuno": { type: String, required: true },
    "juevesAlmuerzo": { type: String, required: true },
    "juevesComida": { type: String, required: true },
    "juevesMerienda": { type: String, required: true },
    "juevesCena": { type: String, required: true },
    "viernesDesayuno": { type: String, required: true },
    "viernesAlmuerzo": { type: String, required: true },
    "viernesComida": { type: String, required: true },
    "viernesMerienda": { type: String, required: true },
    "viernesCena": { type: String, required: true },
    "sabadoDesayuno": { type: String, required: true },
    "sabadoAlmuerzo": { type: String, required: true },
    "sabadoComida": { type: String, required: true },
    "sabadoMerienda": { type: String, required: true },
    "sabadoCena": { type: String, required: true },
    "domingoDesayuno": { type: String, required: true },
    "domingoAlmuerzo": { type: String, required: true },
    "domingoComida": { type: String, required: true },
    "domingoMerienda": { type: String, required: true },
    "domingoCena": { type: String, required: true },
  }, 
  { 
    strict: false 
  } 
)

// Métodos estáticos
DietaSchema.statics.getById = function (id) {
    return this.findOne({_id: id}).lean().exec()
}

DietaSchema.statics.getAll = function () {
    return this.find().exec()
}

// Exporto el modelo
export default DietaSchema