const repeatString = function(palabra, veces) {
    if ( veces < 0 ) return 'ERROR';
    let cadena = "";
    for ( let i = 0; i < veces; i++ ){
        cadena += palabra;
    }
    return cadena;
};

// Do not edit below this line
module.exports = repeatString;
