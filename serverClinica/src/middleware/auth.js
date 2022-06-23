// Importo el módulo de JWT
import jwt from 'jwt-simple'

// Exporto la función de autenticación
export default (req, res, next) => {
    if (!req.headers.authorization) {
        return res
            .status(401)
            .send({ message: 'No tienes autorización para acceder a este recurso' })
    }

    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.decode(token, req.app.locals.config.TOKEN)

    req.user = payload.usuario

    next()
}