const palindromes = function (cadena) {
    const cadenaEvaluada = cadena.toLowerCase().replace(/[^a-z]/g, "");
    return cadenaEvaluada.split("").reverse().join("") == cadenaEvaluada;
};

// Do not edit below this line
module.exports = palindromes;
