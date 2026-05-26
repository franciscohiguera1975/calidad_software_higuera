function evaluarNota(nota){
    if(!Number.isInteger(nota)||nota<0||nota>10) 
        throw new TypeError('nota inválida');
    estado="Reprobado";
    if(nota>7) {
        estado="Aprobado"
    }else if(nota>=4){
        estado="Supletorio"
    }
    return estado;
}
module.exports={ evaluarNota };

/*
mayor a 7 Aprobado
entre 4 y 7 Supletorio
menor a 7 Reprobado
*/