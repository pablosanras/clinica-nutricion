// Importo el módulo de express
import express from 'express'

// Importo los ficheros necesarios
import { auth } from '../middleware'
import LoginController from '../controllers/login'

// Asigno a la variable la función router de express
const router = express.Router()

// Defino la autenticación de la ruta
router.use(auth)

// Asigno la ruta de la API para obtener la información de logins
router.route('/')
    .get(LoginController.login)
    .post(LoginController.verificar)

router.route('/:id')
    .get(LoginController.loginById)

router.route('/verificar/:idPaciente')
    .get(LoginController.loginVerificar)

router.route('/nuevo')
    .post(LoginController.anadirLogin)

// Exporto la función router
export default router