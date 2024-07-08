import { Router } from "express";
import { buscarUsuario, cambiarContrasena, cambiarContrasenaBarbero, cambiarCorreo, cambiarCorreoBarbero, cambiarDescripcionBarbero, cambiarFoto, cambiarFotoBarbero, cambiarNombre, cambiarNombreBarbero, cambiarTelefono, cambiarTelefonoBarbero, crearBarbero, crearUsuario, desactivarUsuario, listarUsuario, login, logout, registroUsuario, verPerfil, verPerfilAdmin } from "../controllers/usuarios.controllers.js";
import { verificarToken } from "../middlewares/oauth.js";

/**
 * Estas son las rutas del backend de usuarios en mi proyecto
 * @type {object}
 */
const rutaUsuarios = Router();

rutaUsuarios.get("/", listarUsuario);
rutaUsuarios.get("/buscar", buscarUsuario);
rutaUsuarios.get("/admin/:id", verPerfilAdmin);
rutaUsuarios.get("/cliente/:id", verPerfil);
rutaUsuarios.post("/login", login);
rutaUsuarios.post("/registro", registroUsuario);
rutaUsuarios.post("/registrar", verificarToken, crearUsuario);
rutaUsuarios.post("/barbero", crearBarbero);
rutaUsuarios.post("/nombre/:id", verificarToken, cambiarNombre);
rutaUsuarios.post("/telefono/:id", verificarToken, cambiarTelefono);
rutaUsuarios.post("/correo/:id", verificarToken, cambiarCorreo);
rutaUsuarios.post("/foto/:id", verificarToken, cambiarFoto);
rutaUsuarios.post("/contrasena/:id", verificarToken, cambiarContrasena);
rutaUsuarios.post("/nombre/barbero/:id", verificarToken, cambiarNombreBarbero);
rutaUsuarios.post("/telefono/barbero/:id", verificarToken, cambiarTelefonoBarbero);
rutaUsuarios.post("/correo/barbero/:id", verificarToken, cambiarCorreoBarbero);
rutaUsuarios.post("/foto/barbero/:id", verificarToken, cambiarFotoBarbero);
rutaUsuarios.post("/descripcion/:id", verificarToken, cambiarDescripcionBarbero);
rutaUsuarios.post("/contrasena/barbero/:id", verificarToken, cambiarContrasenaBarbero);
rutaUsuarios.post("/desactivar", verificarToken, desactivarUsuario);
rutaUsuarios.post("/logout", logout);

export default rutaUsuarios;