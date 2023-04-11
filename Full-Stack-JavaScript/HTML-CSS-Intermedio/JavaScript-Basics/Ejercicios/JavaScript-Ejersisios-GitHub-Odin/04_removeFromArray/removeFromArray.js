const removeFromArray = function(arreglo, ...argumentos) {
    const nuevoArreglo = [];
    arreglo.forEach(( valor ) => {
        if ( !argumentos.includes( valor ) ) {
            nuevoArreglo.push(valor);
        }
    });
    return nuevoArreglo;
};

// Do not edit below this line
module.exports = removeFromArray;