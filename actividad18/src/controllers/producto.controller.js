// el model es el unico que toca los datos (el arreglo)

import * as model from"../models/productos.model.js";

const fallo = (mensaje) => ({ok:false, error:{mensaje}});

export function listarProductos(){
    return {ok:true, data: model.listarDisponibles()};
}

export function verProducto (id){
    const producto = model.obtenerPorId(id)
    if(!producto) return fallo("producto no encontrado");
    return {ok: true, data: producto};
}


export function crearProducto (datos){
    if(!datos.nombre || datos.nombre.trim() === "" ) return fallo ("El nombre es obligatorio");
    if(typeof datos.precio !== "number" || datos.precio <= 0) return fallo ("El precio deb ser mayor a 0");
    if(model.existeNombre(datos.nombre)) return fallo("Ya existe un producto con ese nombre");

    return {ok:true, data:model.crear(datos)};
}

export function actualizarProduto(id, cambios){
    const actualizado = model.actualizar(id, cambios);
    if (!actualizado) return fallo("Producto no encontrado")
        return {ok:true, data:actualizado};
}
export function eliminarProducto(id){
    const eliminado = model.eliminar(id);
    if(!eliminado) return fallo("Productob no encontrado");
    return {ok:true, data:eliminado};
}