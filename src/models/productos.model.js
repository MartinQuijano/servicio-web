const { getSequelize } = require("./util");

async function obtProductosMasVendidos(cantidad){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT marca, sum(lista_pedidos.cantidad) as cantidad FROM lista_pedidos INNER JOIN productos ON lista_pedidos.producto_id = productos.id GROUP BY marca ORDER BY cantidad DESC LIMIT ' + cantidad);
    json = res[0];

    return json;
}

async function obtProductosMasVendidosEnUnPeriodo(cantidad, desde, hasta){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT marca, sum(lista_pedidos.cantidad) as cantidad FROM lista_pedidos INNER JOIN productos ON lista_pedidos.producto_id = productos.id INNER JOIN pedidos ON lista_pedidos.pedido_id = pedidos.id WHERE fecha between \''+desde+'\' and \''+ hasta+'\' GROUP BY marca ORDER BY cantidad DESC LIMIT ' + cantidad);

    json = JSON.stringify(res[0]);

    return json;
}

async function obtProductosMasVendidosPorCategoria(cantidad, categoria){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT marca, sum(lista_pedidos.cantidad) as cantidad FROM lista_pedidos INNER JOIN productos ON lista_pedidos.producto_id = productos.id WHERE (categoria=\''+categoria+'\') GROUP BY marca ORDER BY cantidad DESC LIMIT ' + cantidad);

    json = JSON.stringify(res[0]);

    return json;
}

async function obtProductosMasVendidosPorCategoriaEnUnPeriodo(cantidad, categoria, desde, hasta){
    const sequelize = getSequelize();
    
    res = await sequelize.query('SELECT marca, sum(lista_pedidos.cantidad) as cantidad FROM lista_pedidos INNER JOIN productos ON lista_pedidos.producto_id = productos.id INNER JOIN pedidos ON lista_pedidos.pedido_id = pedidos.id WHERE (categoria=\''+categoria+'\') AND fecha between \''+desde+'\' and \''+ hasta+'\' GROUP BY marca ORDER BY cantidad DESC LIMIT ' + cantidad);

    json = JSON.stringify(res[0]);

    return json;
}

module.exports = {
    obtProductosMasVendidos, obtProductosMasVendidosEnUnPeriodo, obtProductosMasVendidosPorCategoria, obtProductosMasVendidosPorCategoriaEnUnPeriodo
}