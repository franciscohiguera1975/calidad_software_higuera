function puedeConducir(edad){
    if(!Number.isInteger(edad)||edad<0) 
        throw new TypeError('edad inválida');
    return edad>=18 ?'Si':'No';
}
module.exports={ puedeConducir };

/*
mayor a 7 Aprobado
entre 4 y 7 Supletorio
menor a 7 Reprobado
*/