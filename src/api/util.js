function esFechaValida(fecha){
    if(!/^\d{4}-\d{1,2}-\d{1,2}$/.test(fecha))
        return false;
    
    var partes = fecha.split("-");
    var año = parseInt(partes[0], 10);
    var mes = parseInt(partes[1], 10);
    var dia = parseInt(partes[2], 10);
    
    if(año < 1000 || año > 3000 || mes <= 0 || mes > 12)
        return false;
    
    var diasDeLosMeses = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(año % 400 == 0 || (año % 100 != 0 && año % 4 == 0))
        diasDeLosMeses[1] = 29;
    
    return dia > 0 && dia <= diasDeLosMeses[mes - 1];
}

function esPalabraValida(palabra){
    if(!/^[a-zA-Z]+$/.test(palabra))
        return false;
    return true;
}

module.exports = {
    esFechaValida, esPalabraValida
  };