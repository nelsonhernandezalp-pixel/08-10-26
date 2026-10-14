// calculos puro: maneja las operaciones matematicas

export function calcularTotal(pedido){
    return pedido.items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
}

export const formatearprecio = (monto) => "$" + monto.toFixed(2);