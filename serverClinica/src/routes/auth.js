// Importo el módulo de express
import express from 'express'

// Importo el fichero necesario
import AuthController from '../controllers/auth'


// Asigno a la variable la función router de express
const router = express.Router()

// Asigno la ruta de la API para obtener la autenticación
router.route('/')
    .post(AuthController.token)

// Exporto la función router
export default router