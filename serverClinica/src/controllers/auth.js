import jwt from 'jwt-simple'

// Class que contiene los métodos para la API de mediciones
class AuthController{
    // Método para la creación del token
    token (req, res, next) {
        if (!req.body.usuario && !req.body.password) {
            return res
                .status(201)
                .send({ error: 'Debes introducir un usuario y contraseña' })
        }

        const payload = {
            usuario: req.params.usuario,
            password: req.params.password
        }

        return res
            .status(200)
            .send({ token: jwt.encode(
                payload, 
                req.app.locals.config.TOKEN) 
            })
    }
}

// Exporto el controlador
export default new AuthController()