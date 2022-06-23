// Importación del módulo de express
import express from 'express'

// Importación del ficheros de recursos
import config from './config'
import router from './router'
import db from './database'

let _servidor

const servidor = {
    // Función que inicializa el servidor
    iniciar: () => {
        const app = express()

        return db.connect()
            .then(() => {
                config(app)
                router(app)
                
                // Obtengo el puerto del servidor
                const puerto = app.locals.config.PORT

                // Obtengo el host del servidor
                const host = app.locals.config.HOST
                
                // Inicio el servidor
                _servidor = app.listen(puerto, () => {
                    console.log(`Servidor funcionando en http://${host}:${puerto}`)
                })
                
                // Devuelvo el servidor
                return _servidor
            })
    },

    // Función que detiene el servidor
    cerrar: () => {
        _servidor.close()
    }
}

// Exporto el módulo
export default servidor

// Condicional que comprueba si esta iniciado el servidor
if (!module.parent) {
    servidor.iniciar()
}

// Mensaje de error en la ejecución del servidor
process.on('unhandledRejection', (err, p) => {
    console.log('Error personalizado: se ha producido un rechazo no gestionado')
    console.log(`Error personalizado: ${err}`)
});