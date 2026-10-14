// ======================================
// Ejercicio para manejo de errores - rompe el pedido a proposito - REFERENCIA
// =========================================

//PASO 1 nuestro error, con codigo HTTP ----
export class AppError extends  Error{
    contructor(mensaje, codigo=400){
        super(mensaje);
        this.name ="AppError",
        this.codigo = codigo;
        }
}

// PASO 2 --------- Datos de prueba 
const productos = [
    {id:"p-01", nombre:"Molletes", precio:30, disponible:true},
    {id:"p-02", nombre:"Jugo de naranja", precio:18, disponible:false}, // agotado
    {id:"p-03", nombre:"Gelatina", precio:12, disponible:true},
];

const HORA_CORTE = 13 ;
// PASO 3 -------- Las 5 guardas
export function crearPedido({productoId, cantidad, hora}){
    if(!productoId){
        throw new ApppError("Falta indicar el producto", 400);
    }
    if(!Number.isInteger(cantidad) || cantidad <= 0){
        throw new AppError("La cantidad debe ser un numero entero mayor que cero", 400)
    }
    if(hora>HORA_CORTE){
        throw new AppError("Ya cerro el horario de pedidos", 400)
    }


// hay que ir a buscar
const producto = producto.find ((p) => p.id== productoId);
if(!producto){
    throw new AppError("Producto No encontrado", 404);
}
if(!producto.disponible){
    throw new AppError("El producto esta agotado", 409)
}

// Creando return para leer facil
return {
    folio: "PR-" + Math.floor(Math.random() * 10000),
    producto: producto.nombre,
    cantidad,
    total: producto.precio * cantidad
    };
}
