const { getSequelize } = require("./util");

async function obtCategoriaMasCantidadVendida(cantidad){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT categoria, sum(lp.cantidad) as cantidad FROM lista_pedidos lp INNER JOIN productos p ON lp.producto_id = p.id GROUP BY categoria ORDER BY cantidad DESC LIMIT ' + cantidad);

    json = JSON.stringify(res[0]);

    return json;
}

async function obtCategoriaMasCantidadVendidaEnPeriodo(cantidad, desde, hasta){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT categoria, sum(lp.cantidad) as cantidad FROM lista_pedidos lp INNER JOIN productos p ON lp.producto_id = p.id INNER JOIN pedidos ON lp.pedido_id = pedidos.id WHERE fecha between \''+desde+'\' and \''+ hasta+'\' GROUP BY categoria ORDER BY cantidad DESC LIMIT ' + cantidad);

    json = JSON.stringify(res[0]);

    return json;
}

async function obtCategoriaMasIngresosGenerados(cantidad){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT categoria, sum(p.precio*lp.cantidad) as total FROM lista_pedidos lp INNER JOIN productos p ON lp.producto_id = p.id GROUP BY categoria ORDER BY total DESC LIMIT ' + cantidad);

    json = JSON.stringify(res[0]);

    return json;
}

async function obtCategoriaMasIngresosGeneradosEnPeriodo(cantidad, desde, hasta){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT categoria, sum(p.precio*lp.cantidad) as total FROM lista_pedidos lp INNER JOIN productos p ON lp.producto_id = p.id INNER JOIN pedidos ON lp.pedido_id = pedidos.id WHERE fecha between \''+desde+'\' and \''+ hasta+'\' GROUP BY categoria ORDER BY total DESC LIMIT ' + cantidad);

    json = JSON.stringify(res[0]);

    return json;
}

async function obtTotalEnVentasPorAño(){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT DATE_TRUNC(\'year\',fecha) as fecha, sum(lista_pedidos.cantidad * p.precio) as total FROM lista_pedidos INNER JOIN productos p ON lista_pedidos.producto_id = p.id INNER JOIN pedidos ON lista_pedidos.pedido_id = pedidos.id GROUP BY DATE_TRUNC(\'year\', fecha) ORDER BY fecha');

    json = JSON.stringify(res[0]);

    return json;
}

async function obtTotalEnVentasPorMes(){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT DATE_TRUNC(\'month\',fecha) as fecha, sum(lista_pedidos.cantidad * p.precio) as total FROM lista_pedidos INNER JOIN productos p ON lista_pedidos.producto_id = p.id INNER JOIN pedidos ON lista_pedidos.pedido_id = pedidos.id GROUP BY DATE_TRUNC(\'month\', fecha) ORDER BY fecha');

    json = JSON.stringify(res[0]);

    return json;
}

async function obtTotalEnVentasPorDia(){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT DATE_TRUNC(\'day\',fecha) as fecha, sum(lista_pedidos.cantidad * p.precio) as total FROM lista_pedidos INNER JOIN productos p ON lista_pedidos.producto_id = p.id INNER JOIN pedidos ON lista_pedidos.pedido_id = pedidos.id GROUP BY DATE_TRUNC(\'day\', fecha) ORDER BY fecha');

    json = JSON.stringify(res[0]);

    return json;
}

module.exports = {
    obtCategoriaMasCantidadVendida, obtCategoriaMasCantidadVendidaEnPeriodo, obtCategoriaMasIngresosGenerados, obtCategoriaMasIngresosGeneradosEnPeriodo,
    obtTotalEnVentasPorAño, obtTotalEnVentasPorMes, obtTotalEnVentasPorDia
}