// Importo el módulo de express
import express from 'express'

// Importo los ficheros necesarios
import { auth } from '../middleware'
import DatosController from '../controllers/datos'

// Asigno a la variable la función router de express
const router = express.Router()

// Defino la autenticación de la ruta
router.use(auth)

// Asigno la ruta de la API para obtener los datos
router.route('/')
    .get(DatosController.datos)
    .post(DatosController.anadirDatos)

router.route('/:id')
    .get(DatosController.datosId)
    .put(DatosController.editarDatos)

router.route('/borrar/:id')
    .get(DatosController.borrarDatos)

router.route('/validardni/:dni')
    .get(DatosController.validarDNI)

// Exporto la función router
export default router