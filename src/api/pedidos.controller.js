const pedidosService = require('../services/pedidos.service');
const { esFechaValida } = require("./util");

const categoriaMasCantidadVendida = async function(req, res){
  cantidad = req.params.cantidad
  if(!isNaN(cantidad))
  {
    prods = await pedidosService.obtcategoriaMasCantidadVendida(cantidad);
    res.send(prods);
  }
  else
  {
    res.status(400).send(JSON.stringify({ error: 'La entrada cantidad debe ser un número' }));
  }
}

const categoriaMasCantidadVendidaEnPeriodo = async function(req, res){
  cantidad = req.params.cantidad;
  fechaInicio = req.params.inicio;
  fechaFin = req.params.fin;
  
  if(!isNaN(cantidad)){
    if(esFechaValida(fechaInicio) && esFechaValida(fechaFin)){
      prods = await pedidosService.obtcategoriaMasCantidadVendidaEnPeriodo(cantidad, fechaInicio, fechaFin);
      res.send(prods);
    }
    else
    {
      res.status(400).send(JSON.stringify({ error: 'El formato de la fecha es incorrecto. Formato esperado: aaaa-mm-dd'}));
    }
  }
  else
  {
    res.status(400).send(JSON.stringify({ error: 'La entrada cantidad debe ser un número' }));
  }
}

const categoriaMasIngresosGenerados = async function(req, res){
  cantidad = req.params.cantidad
  if(!isNaN(cantidad))
  {
    prods = await pedidosService.obtCategoriaMasIngresosGenerados(cantidad);
    res.send(prods);
  }
  else
  {
    res.status(400).send(JSON.stringify({ error: 'La entrada cantidad debe ser un número' }));
  }
}

const categoriaMasIngresosGeneradosEnPeriodo = async function(req, res){
  cantidad = req.params.cantidad;
  fechaInicio = req.params.inicio;
  fechaFin = req.params.fin;
  
  if(!isNaN(cantidad)){
    if(esFechaValida(fechaInicio) && esFechaValida(fechaFin)){
      prods = await pedidosService.obtCategoriaMasIngresosGeneradosEnPeriodo(cantidad, fechaInicio, fechaFin);
      res.send(prods);
    }
    else
    {
      res.status(400).send(JSON.stringify({ error: 'El formato de la fecha es incorrecto. Formato esperado: aaaa-mm-dd'}));
    }
  }
  else
  {
    res.status(400).send(JSON.stringify({ error: 'La entrada cantidad debe ser un número' }));
  }
}

const totalIngresosPorAños = async function(req, res){

    prods = await pedidosService.obtTotalEnVentasPorAño();
    res.send(prods);
}

const totalIngresosPorMeses = async function(req, res){

  prods = await pedidosService.obtTotalEnVentasPorMes();
  res.send(prods);
}

const totalIngresosPorDias = async function(req, res){

  prods = await pedidosService.obtTotalEnVentasPorDia();
  res.send(prods);
}

module.exports = {
  categoriaMasCantidadVendida, categoriaMasCantidadVendidaEnPeriodo, categoriaMasIngresosGenerados, categoriaMasIngresosGeneradosEnPeriodo,
  totalIngresosPorAños, totalIngresosPorMeses, totalIngresosPorDias
};