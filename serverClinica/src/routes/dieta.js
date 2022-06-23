// Importo el módulo de express
import express from 'express'

// Importo los ficheros necesarios
import { auth } from '../middleware'
import DietaController from '../controllers/dieta'

// Asigno a la variable la función router de express
const router = express.Router()

// Defino la autenticación de la ruta
router.use(auth)

// Asigno la ruta de la API para obtener las dietas
router.route('/')
    .get(DietaController.dieta)
    .post(DietaController.anadirDieta)

router.route('/:idPaciente')
    .get(DietaController.dietaPaciente)

router.route('/editar/:idPaciente')
    .put(DietaController.editarDieta)

/*
    Ruta para la eliminación de una dieta, desactivada para esta fase de desarrollo

    router.route('/borrar/:id')
        .get(MedicionesController.borrarMedicion)
*/
// Exporto la función router
export default router