'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _servidor;

const servidor = {
    iniciar: () => {
        const app = (0, _express2.default)();

        return _database2.default.connect().then(() => {
            (0, _config2.default)(app);
            (0, _router2.default)(app);

            const puerto = app.locals.config.PORT;
            const host = app.locals.config.HOST;

            _servidor = app.listen(puerto, () => {
                console.log(`Servidor funcionando en http://${host}:${puerto}`);
            });

            return _servidor;
        });
    },
    cerrar: () => {
        _servidor.close();
    }
};

exports.default = servidor;


if (!module.parent) {
    servidor.iniciar();
}

process.on('unhandledRejection', (err, p) => {
    console.log('Error personalizado: se ha producido un rechazo no gestionado');
    console.log(`Error personalizado: ${err}`);
});
