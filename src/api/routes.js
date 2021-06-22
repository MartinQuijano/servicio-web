const { Router } = require('express');
const router = Router();

const { productosMasVendidos, productosMasVendidosEnPeriodo, productosDeCategoriaMasVendidos, productosDeCategoriaMasVendidosEnPeriodo} = require('./productos.controller');
const { categoriaMasCantidadVendida, categoriaMasCantidadVendidaEnPeriodo, categoriaMasIngresosGenerados, categoriaMasIngresosGeneradosEnPeriodo,
    totalIngresosPorAños, totalIngresosPorMeses, totalIngresosPorDias} = require('./pedidos.controller');

router.get('/productos/masvendidos/:cantidad', productosMasVendidos);
router.get('/productos/masvendidos/:cantidad/desde/:inicio/hasta/:fin', productosMasVendidosEnPeriodo);
router.get('/productos/masvendidos/:cantidad/categoria/:categoria', productosDeCategoriaMasVendidos);
router.get('/productos/masvendidos/:cantidad/categoria/:categoria/desde/:inicio/hasta/:fin', productosDeCategoriaMasVendidosEnPeriodo);

router.get('/pedidos/categoria/masvendidos/:cantidad', categoriaMasCantidadVendida);
router.get('/pedidos/categoria/masvendidos/:cantidad/desde/:inicio/hasta/:fin', categoriaMasCantidadVendidaEnPeriodo);
router.get('/pedidos/categoria/masingresos/:cantidad', categoriaMasIngresosGenerados);
router.get('/pedidos/categoria/masingresos/:cantidad/desde/:inicio/hasta/:fin', categoriaMasIngresosGeneradosEnPeriodo);
router.get('/pedidos/ventas/anios', totalIngresosPorAños);
router.get('/pedidos/ventas/meses', totalIngresosPorMeses);
router.get('/pedidos/ventas/dias', totalIngresosPorDias);

module.exports = router;