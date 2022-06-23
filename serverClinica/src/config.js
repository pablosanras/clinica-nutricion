// Importo los módulos necesarios
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';

// Asigno a constante la información de configuración
const SETTINGS = config();

// Exporto la función para el funcionamiento del servidor
export default app => {
    app.disabled('x-powered-by');
    app.set('env' , SETTINGS.parsed.NODE_ENV);
    app.set('config' , SETTINGS.parsed);
    app.locals.env = app.get('env');
    app.locals.config = app.get('config');

    app.use(logger('combined'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cors());
};

