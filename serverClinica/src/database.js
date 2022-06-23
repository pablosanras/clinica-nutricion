// Importo el módulo para la base de datos
import mongoose from "mongoose";

// Importo el módulo de configuración
import  { config } from "dotenv";

// Asigno a constante la información de configuración
const SETTINGS = config();

// Clase de la base de datos
class Database {
    constructor() {
        this.conn = false;

    }

    connection() {
        return this.conn;
    }

    // Función que inicializa la conexión con la base de datos
    connect() {
        // Asigno a la variable la conexión con la base de datos
        const host = `${SETTINGS.parsed.DB_PROTOCOL}://${SETTINGS.parsed.DB_URL}:${SETTINGS.parsed.DB_PORT}/${SETTINGS.parsed.DB_NAME}`

        // Promesa que se ejecuta cuando se conecta con la base de datos
        return new Promise((resolve, reject) => {
            mongoose.set('debug', SETTINGS.parsed.DB_DEBUG);
            mongoose.Promise = global.Promise;

            this.conn = mongoose.createConnection(
                host
            );

            this.conn.on('error', (err) => {
                console.log(`Error de conexión: ${err}`);
                return process.exit();
            });

            this.conn.on('connected', (err) => {
                console.log('Conectado a la base de datos');
                resolve();
            });
        });
    }
}

// Creo una instancia de la clase
const instance = new Database();

// Exporto la instancia
export default instance;