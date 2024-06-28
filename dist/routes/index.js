"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productosRoutes = _interopRequireDefault(require("./productos.routes.js"));
var _serviciosRoutes = _interopRequireDefault(require("./servicios.routes.js"));
var _usuariosRoutes = _interopRequireDefault(require("./usuarios.routes.js"));
var _ubicacionesRoutes = _interopRequireDefault(require("./ubicaciones.routes.js"));
var _barberoRoutes = _interopRequireDefault(require("./barbero.routes.js"));
var _comentariosRoutes = _interopRequireDefault(require("./comentarios.routes.js"));
var _ofertasRoutes = _interopRequireDefault(require("./ofertas.routes.js"));
var _preguntasRoutes = _interopRequireDefault(require("./preguntas.routes.js"));
var _reservasRoutes = _interopRequireDefault(require("./reservas.routes.js"));
var _ventasRoutes = _interopRequireDefault(require("./ventas.routes.js"));
var _favoritosRoutes = _interopRequireDefault(require("./favoritos.routes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Estas son las rutas del backend en mi proyecto 
 * @type {object}
 */
var ruta = (0, _express.Router)();
ruta.use("/productos", _productosRoutes["default"]);
ruta.use("/servicios", _serviciosRoutes["default"]);
ruta.use("/usuarios", _usuariosRoutes["default"]);
ruta.use("/ubicaciones", _ubicacionesRoutes["default"]);
ruta.use("/barberos", _barberoRoutes["default"]);
ruta.use("/comentarios", _comentariosRoutes["default"]);
ruta.use("/ofertas", _ofertasRoutes["default"]);
ruta.use("/preguntas", _preguntasRoutes["default"]);
ruta.use("/reservas", _reservasRoutes["default"]);
ruta.use("/ventas", _ventasRoutes["default"]);
ruta.use("/favoritos", _favoritosRoutes["default"]);
var _default = exports["default"] = ruta;