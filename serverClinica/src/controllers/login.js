// Importo el modelo login de los modelos
import { Login } from '../models'

// Class que contiene los métodos para la API de login
class LoginController{
    // Método que devuelve todos los logins
    async login(req, res, next){
        const data = await Login().getAll()
        
        res
            .status(200)
            .json(data)
    }
    
    // Método que devuelve un login
    async loginById(req, res, next){
        const data = await Login().getById(req.params.id)

        res
            .status(200)
            .json(data)
    }

    // Método que añade un login
    async anadirLogin(req, res, next){
        const nuevosDatos = Login() ({
            "nombre": req.body.nombre,
            "usuario": req.body.usuario,
            "contrasena": req.body.contrasena,
            "idPaciente": req.body.idPaciente,
        })

        const data = await nuevosDatos.save()

        return res
            .status(201)
            .json(data)
    }

    // Método que verifica si una paciente tiene un login
    async loginVerificar(req, res, next){
        const data = await Login()
        .findOne(
            { idPaciente: req.params.idPaciente }
        )
        res
            .status(200)
            .json(data)
    }

    // Método que verifica un login
    async verificar(req, res, next){

        const data = await Login()
        .findOne(
            { usuario: req.body.usuario , 
            contrasena: req.body.contrasena }
        )
        res
            .status(200)
            .json(data)
    }
}

// Exporto el controlador
export default new LoginController()