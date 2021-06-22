const productoService = require('../services/productos.service');
const { esFechaValida, esPalabraValida } = require("./util");

const productosMasVendidos = async function(req, res){
  cantidad = req.params.cantidad
  if(!isNaN(cantidad))
  {
    prods = await productoService.obtProductosMasVendidos(cantidad);
    res.send(prods);
  }
  else
  {
    res.status(400).send(JSON.stringify({ error: 'La entrada cantidad debe ser un número' }));
  }
}

const productosMasVendidosEnPeriodo = async function(req, res){
  cantidad = req.params.cantidad;
  fechaInicio = req.params.inicio;
  fechaFin = req.params.fin;
  
  if(!isNaN(cantidad)){
    if(esFechaValida(fechaInicio) && esFechaValida(fechaFin)){
      prods = await productoService.obtProductosMasVendidosEnPeriodo(cantidad, fechaInicio, fechaFin);
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

const productosDeCategoriaMasVendidos = async function(req, res){
  cantidad = req.params.cantidad;
  categoria = req.params.categoria;
  if(!isNaN(cantidad)){
    if(esPalabraValida(categoria)){
      prods = await productoService.obtProductosMasVendidosPorCategoria(cantidad, categoria);
      res.send(prods);
    }
    else
    {
      res.status(400).send(JSON.stringify({ error: 'El formato del nombre de la categoria no es valido. Debe ser una entrada alfabetica'}));
    }
  }
  else
  {
    res.status(400).send(JSON.stringify({ error: 'La entrada cantidad debe ser un número' }));
  }
}

const productosDeCategoriaMasVendidosEnPeriodo = async function(req, res){
  cantidad = req.params.cantidad;
  categoria = req.params.categoria;
  fechaInicio = req.params.inicio;
  fechaFin = req.params.fin;
  if(!isNaN(cantidad)){
    if(esPalabraValida(categoria)){
      if(esFechaValida(fechaInicio) && esFechaValida(fechaFin)){
        prods = await productoService.obtProductosMasVendidosPorCategoriaEnUnPeriodo(cantidad, categoria, fechaInicio, fechaFin);
        res.send(prods);
      }
      else
      {
        res.status(400).send(JSON.stringify({ error: 'El formato de la fecha es incorrecto. Formato esperado: aaaa-mm-dd'}));
      }
    }
    else
    {
      res.status(400).send(JSON.stringify({ error: 'El formato del nombre de la categoria no es valido. Debe ser una entrada alfabetica'}));
    }
  }
  else
  {
    res.status(400).send(JSON.stringify({ error: 'La entrada cantidad debe ser un número' }));
  }
}

module.exports = {
  productosMasVendidos, productosMasVendidosEnPeriodo, productosDeCategoriaMasVendidos, productosDeCategoriaMasVendidosEnPeriodo
};