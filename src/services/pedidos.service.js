const pedidos = require('../models/pedidos.model')

const obtcategoriaMasCantidadVendida = async function(cantidad){

    prods = await pedidos.obtCategoriaMasCantidadVendida(cantidad);
    
    return prods;
}

const obtcategoriaMasCantidadVendidaEnPeriodo = async function(cantidad, fechaInicio, fechaFin){

    prods = await pedidos.obtCategoriaMasCantidadVendidaEnPeriodo(cantidad, fechaInicio, fechaFin);
    
    return prods;
}

const obtCategoriaMasIngresosGenerados = async function(cantidad){

    prods = await pedidos.obtCategoriaMasIngresosGenerados(cantidad);
    
    return prods;
}

const obtCategoriaMasIngresosGeneradosEnPeriodo = async function(cantidad, fechaInicio, fechaFin){

    prods = await pedidos.obtCategoriaMasIngresosGeneradosEnPeriodo(cantidad, fechaInicio, fechaFin);
    
    return prods;
}

const obtTotalEnVentasPorAño = async function(){

    prods = await pedidos.obtTotalEnVentasPorAño();
    
    return prods;
}

const obtTotalEnVentasPorMes = async function(){

    prods = await pedidos.obtTotalEnVentasPorMes();
    
    return prods;
}

const obtTotalEnVentasPorDia = async function(){

    prods = await pedidos.obtTotalEnVentasPorDia();
    
    return prods;
}

module.exports = {
    obtcategoriaMasCantidadVendida, obtcategoriaMasCantidadVendidaEnPeriodo, obtCategoriaMasIngresosGenerados, obtCategoriaMasIngresosGeneradosEnPeriodo,
    obtTotalEnVentasPorAño, obtTotalEnVentasPorMes, obtTotalEnVentasPorDia
};