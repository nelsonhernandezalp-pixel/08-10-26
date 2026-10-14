// el index solo arranca y prueba, no tiene logica de negocio

import * as cntrl from "./src/controllers/producto.controller.js"
import { calcularTotal, fromatearPrecio } from "./src/utils/calculo.js"
console.log(" --------- LISTAR ------");
console.log(cntrl.listarProductos());

console.log("----- CREAR -----")
const creado = cntrl.crearProducto({nombre:"Sincronizada", precio:32, categoria:"comida"});
console.log(creado)