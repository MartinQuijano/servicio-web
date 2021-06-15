const productos = require('../models/productos.model')

const obtProductosMasVendidos = async function(cantidad){

    prods = await productos.obtProductosMasVendidos(cantidad);
    
    return prods;
}

const obtProductosMasVendidosEnPeriodo = async function(cantidad, fechaInicio, fechaFin){

    prods = await productos.obtProductosMasVendidosEnUnPeriodo(cantidad, fechaInicio, fechaFin);
    
    return prods;
}

const obtProductosMasVendidosPorCategoria = async function(cantidad, categoria){

    prods = await productos.obtProductosMasVendidosPorCategoria(cantidad, categoria);
    
    return prods;
}

const obtProductosMasVendidosPorCategoriaEnUnPeriodo = async function(cantidad, categoria, fechaInicio, fechaFin){

    prods = await productos.obtProductosMasVendidosPorCategoriaEnUnPeriodo(cantidad, categoria, fechaInicio, fechaFin);
    
    return prods;
}

module.exports = {
    obtProductosMasVendidos, obtProductosMasVendidosEnPeriodo, obtProductosMasVendidosPorCategoria, obtProductosMasVendidosPorCategoriaEnUnPeriodo
};