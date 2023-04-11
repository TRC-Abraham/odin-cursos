const add = function( num1, num2 ) {
	let addResult = num1 + num2;
	return addResult;
};

const subtract = function( num1, num2 ) {
	let resta = num1 - num2;
	return resta;
};

const sum = function(array) {
	let suma1 = array.reduce((valorAnterior, valorActual) => {
		return valorAnterior + valorActual;
	}, 0);
	return suma1;
};

const multiply = function(producto) {
	let multiplicacion = producto.reduce(function (acumulador, valorActual){
		acumulador = acumulador * valorActual;
		return acumulador;
	} );
	return multiplicacion;
};

const power = function( base, potencia ) {
	numPotencia = Math.pow( base, potencia );
	return numPotencia;
};

const factorial = function( numero ) {
	let numFactorial = 1;
	for ( let i = 1; i <= numero; i++ ){
		numFactorial = numFactorial * i;
	}
	return numFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
