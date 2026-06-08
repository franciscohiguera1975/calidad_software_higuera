function crearAlumno(nombre, edad) {
    if (!nombre || typeof nombre !='string') {
        throw new TypeError('Nombre inválido');
        
    }
    if (edad < 0) {
        throw new TypeError('Edad inválida');
        
    }
    return {
        nombre,
        edad
    };
}

module.exports = { crearAlumno };
