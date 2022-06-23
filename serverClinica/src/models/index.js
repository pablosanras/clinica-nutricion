// Importo el fichero de configuración de la base de datos
import db from '../database'

// Importo los modelos de la base de datos
import LoginSchema from './login'
import DatosSchema from './datos'
import MedicionesSchema from './mediciones'
import DietaSchema from './dieta'

// Asigno a la variable el modelo para la conexión con la base de datos
export const Login = () =>
    db.connection().model('Login', LoginSchema)

export const Datos = () =>
    db.connection().model('Datos', DatosSchema)

export const Mediciones = () =>
    db.connection().model('Mediciones', MedicionesSchema)

export const Dieta = () =>
    db.connection().model('Dieta', DietaSchema)
