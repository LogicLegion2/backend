import { Router } from "express";
import { crearBarberoFavorito, crearOfertaFavorito, crearProductoFavorito, crearServicioFavorito, listarFavoritos } from "../controllers/favoritos.controllers.js";
import { verificarToken } from "../middlewares/oauth.js";

/**
 * Estas son las rutas del backend de favoritos en mi proyecto 
 * @type {object}
 */
const rutaFavoritos = Router();

rutaFavoritos.get("/:id", listarFavoritos);
rutaFavoritos.post("/barbero/:barbero", verificarToken, crearBarberoFavorito);
rutaFavoritos.post("/servicio/:servicio", verificarToken, crearServicioFavorito);
rutaFavoritos.post("/oferta/:oferta", verificarToken, crearOfertaFavorito);
rutaFavoritos.post("/producto/:producto", verificarToken, crearProductoFavorito);

export default rutaFavoritos;