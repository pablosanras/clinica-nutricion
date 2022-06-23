// Archivo de autenticación de usuarios
import auth from './routes/auth'

// Fichero de rutas de la API
import login from './routes/login'
import datos from './routes/datos'
import mediciones from './routes/mediciones'
import dieta from './routes/dieta'

// Asignación de rutas
export default app => {
    app.use('/login', login)
    app.use('/datos', datos)
    app.use('/mediciones', mediciones)
    app.use('/dieta', dieta)
    app.use('/auth', auth)
}