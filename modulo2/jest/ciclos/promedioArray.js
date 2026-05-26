function promedioArray(numeros){
    if (!Array.isArray(numeros)||numeros.length==0) 
        {
        throw new TypeError('Arreglo no válido');
    }
        
    let total=0;
    for(let i=0;i<=numeros.length-1;i++) 
        total+=numeros[i];
    return total/numeros.length;
}
module.exports={ promedioArray };