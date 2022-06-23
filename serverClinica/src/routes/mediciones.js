// Importo el módulo de express
import express from 'express'

// Importo los ficheros necesarios
import { auth } from '../middleware'
import MedicionesController from '../controllers/mediciones'

// Asigno a la variable la función router de express
const router = express.Router()

// Defino la autenticación de la ruta
router.use(auth)

// Asigno la ruta de la API para obtener las mediciones
router.route('/')
    .get(MedicionesController.mediciones)
    .post(MedicionesController.anadirMedicion)

router.route('/:paciente')
    .get(MedicionesController.medicionesPaciente)
    
router.route('/editar/:id')
    .get(MedicionesController.consultarMedicionesId)
    .put(MedicionesController.editarMedicion)


/* 
    Ruta para la eliminación de una medición, desactivada para esta fase de desarrollo

    router.route('/borrar/:id')
        .get(MedicionesController.borrarMedicion)
*/

// Exporto la función router
export default router