import { Router } from "express";
import { buscarUbicacion, crearUbicacion, desactivarUbicacion, editarUbicacion, listarUbicacion, obtenerUbicacion } from "../controllers/ubicaciones.controllers.js";
import { verificarToken } from "../middlewares/oauth.js";

/**
 * Estas son las rutas del backend de ubicaciones en mi proyecto
 * @type {object}
 */
const rutaUbicaciones = Router();

rutaUbicaciones.get("/", listarUbicacion);
rutaUbicaciones.get("/buscar", buscarUbicacion);
rutaUbicaciones.post("/crear", verificarToken, crearUbicacion);
rutaUbicaciones.get("/obtener/:id", obtenerUbicacion);
rutaUbicaciones.post("/editar", verificarToken, editarUbicacion);
rutaUbicaciones.post("/desactivar", verificarToken, desactivarUbicacion);

export default rutaUbicaciones;