import { Router } from "express";
import { agregarProductoCarrito, buscarProductoVendido, crearPago, crearReembolso, desactivarEntrega, desactivarProductoCarrito, historialCompra, verCarroCompras, verEntregas, verEntregasAdmin, verReservasProductos } from "../controllers/ventas.controllers.js";
import { verificarToken } from "../middlewares/oauth.js";

/**
 * Estas son las rutas del backend de ventas en mi proyecto
 * @type {object}
 */
const rutaVentas = Router();

rutaVentas.post("/compra", crearPago);
rutaVentas.post("/reembolso", crearReembolso);
rutaVentas.get("/historial/:id", historialCompra);
rutaVentas.get("/buscar", buscarProductoVendido);
rutaVentas.get("/entregas/admin", verEntregasAdmin);
rutaVentas.get("/entregas/:id", verEntregas);
rutaVentas.post("/desactivar", desactivarEntrega);
rutaVentas.post("/desactivar/carrito", verificarToken, desactivarProductoCarrito);
rutaVentas.get("/productos",verReservasProductos);
rutaVentas.post("/carrito/agregar/:producto", verificarToken, agregarProductoCarrito);
rutaVentas.get("/carrito/:id", verCarroCompras);

export default rutaVentas; 