//VARIABLES (let Y var)

// Existen 3 formas de establecer o declarar variables. "var, let y const"

// Una variable es un "almacenamiento con nombre" para datos. Podemos usar variables para almacenar golosinas, visitantes y otros datos.

// La siguiente declaración crea (en otras palabras: declara ) una variable con el nombre "mensaje":

/* let message; */

// Ahora, podemos poner algunos datos usando el operador de asignación =:

/* let message = 'Hello' */

// Se guardo la cadena 'Hello' en la variable llamada let

// La cadena ahora se guarda en el área de memoria asociada con la variable. Podemos acceder a ella usando el nombre de la variable:

/* alert(message); */

// Podemos combinar la declaración y asignación de variables en una sola línea:

/* let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello! */

// También podemos declarar múltiples variables en una línea:

/* let user = 'John', age = 25, message = 'Hello'

let user = 'John';          
let age = 25;               // Más larga, pero más fácil de leer
let message = 'Hello';

let user = 'John',
    age = 25,               // Estilo multilinea.
    message = 'Hello';

let user = 'John'
    , age = 25              // Estilo "coma primero"
    , message = 'Hello'; 
*/

// Antiguamente se usaba la palabra clave "var" en lugar de "let", si bien hacen los mismo; cuentan con diferencias sutiles

/* let message;
message = 'Hello';
message = 'World';          // Valor cambiado
alert(message); */

// Es posible copiar datos de una variable a otra:

/* let hello = 'Hello world';
let message; */

// Se declaran las variable involucradas, la primera con el contenido que vamos a copiar a la segunda.

/* message = hello;  // Se copia a "message" el contenido de "hello"

alert(hello);
alert(message); */

// Solo se puede declarar a una variable un sola vez
//(let name-var;), luego debemos de referirnos a ella sin "let".

// Hay dos limitaciones en los nombres de variables en JavaScript:

// El nombre debe contener solo letras, dígitos o los símbolos "$" y "_".
// El primer carácter no debe ser un dígito.
// Ejemplos de nombres válidos:

// let userName;
// let test123;
// myNameIsLong;    "Denominado: camelCase"
// let $;
// let _;

// Las mayúsculas importan, las variables nombradas "apple" y "APPLE" son dos variables diferentes.

// "use strict;"
// Antes era posible declarar una variable sin usar "var" o "let", aun ahora es posible, pero es necesario en ese caso no usar "use strict;"


/* num = 5;    // Creada variable "num" con valor igual a 5.
alert(num); */

// Esta es una mala práctica y causaría un error en modo estricto:

/* "use strict";
num = 5;
alert(num); */

//--------------------------
// CONSTANTES "const"
//--------------------------

// Para declarar una variable constante (que no cambia), use consten lugar de let:

/* const myBirthday = '18.04.1982'; */

// Las variables declaradas usando const se llaman "constantes". No se pueden reasignar. Un intento de hacerlo causaría un error:

// Existe una práctica generalizada de usar constantes como alias para valores difíciles de recordar que se conocen antes de la ejecución.

// Tales constantes se nombran usando letras mayúsculas y guiones bajos.

/* const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00"; */

// Cuando necesitemos seleccionar un color:

/* let color = COLOR_ORANGE;
alert(color); */

// Normalmente se declaran constantes con mayúsculas cunado se conoce de antemano sus valores y/o son valores difíciles de recordar o escribir (como colores).

// Algunas reglas buenas para seguir son:

// 1 - Use nombres legibles por humanos como "userName" o "shoppingCart".
// 2 - Manténgase alejado de abreviaturas o nombres cortos como a, b, c, a menos que realmente sepa lo que está haciendo.
// 3 - Hacer nombres máximamente descriptivos y concisos. Ejemplos de malos nombres son "data" y "value".
// 4 - Acuerde los términos dentro de su equipo y en su propia mente. Si un visitante del sitio se llama "usuario", entonces deberíamos nombrar variables relacionadas "currentUser" o "newUser" en lugar de "currentVisitor" o "newManInTown".

// Una variable extra es bueno, no malo.

// Los minificadores y navegadores de JavaScript modernos optimizan el código lo suficientemente bien, por lo que no crearán problemas de rendimiento. El uso de diferentes variables para diferentes valores puede incluso ayudar al motor a optimizar su código.

// Tarea 1

let name = 'John';
let admin;
    admin = name;
alert(admin);

// Tarea 2

let ownPlanet = 'Tierra';
let currentUser = "Visitante actual";
alert(ownPlanet);
alert(currentUser);

// Tarea 3

const BIRTHDAY = '18.04.1982';     // Valor conocido de antemano
const age = someCode(BIRTHDAY);    // Valor conocido en ejecución

//------------------------------------------

// Conversion numerica, unary + (+value/variable/constante).

// El plus binario los agregaría como cadenas:

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", El "binary plus (espacio+espacio)" concatena cadenas.
// Si queremos tratarlos como números, debemos convertirlos y luego sumarlos:

let apples = "2";
let oranges = "3";

// Ambos valores se convierten a números, antes de ser sumados por "binary plus"

alert( +apples + +oranges ); // 5

// Lo variante larga de lo anterior:
// alert( Number(apples) + Number(oranges) ); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

//--------------------------------------

// Asignación "=" Regresa un valor 

alert( a ); // 3
alert( c ); // 0
// En el ejemplo anterior, el resultado de expresión (a = b + 1)es el valor que se asignó a "a"(es decir 3). Luego se utiliza para evaluaciones posteriores.

//---------------------------------------

//Chaining assignments

// Another interesting feature is the ability to chain assignments:

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

//-----------------------------------------


// Modificación en situ

// A menudo necesitamos aplicar un operador a una variable y almacenar el nuevo resultado en esa misma variable.

// Por ejemplo:



let n = 2;
n = n + 5;
n = n * 2;

// Esta notación se puede acortar usando los operadores +=y *=:

let n = 2;
n += 5; // ahora n = 7 (lo mimo que n = n + 5)
n *= 2; // ahora n = 14 (lo mimo que n = n * 2)

alert( n ); // 14

//------------------------------------------

// Incremento y decremento

// Aumentar o disminuir un número en uno es una de las operaciones numéricas más comunes.

// Entonces, hay operadores especiales para ello:

// Incremento ++ aumenta una variable en 1:

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

// El decremento -- disminuye una variable en 1:

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

// Nota: El incremento/decremento solo se puede aplicar a las variables. Intentar usarlo en un valor como 5++dará un error.

// Los operadores ++y --se pueden colocar antes o después de una variable.

// Cuando el operador va después de la variable, está en “forma de postfijo”: counter++.
// La “forma de prefijo” es cuando el operador va antes de la variable: ++counter.

// Ambas declaraciones hacen lo mismo: aumentar counter en 1.

//La diferencia solo puede verse si usamos el valor devuelto de ++/--.

// Tarea 4 

// ¿Cuáles son los valores finales de todas las variables a, by después del código siguiente?cd

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// ¿Cuáles son los valores de a y x después del siguiente código?

let a = 2;

let x = 1 + (a *= 2); // El contenido de "a" se multiplica por 2
                        // x = 5

// ¿Cuáles son los resultados de estas expresiones?

"" + 1 + 0      // 10
"" - 1 + 0      // -1   (convierte una cadena vacía ""en 0.)
true + false    // 1
6 / "3"         // 2
"2" * "3"       // 6
4 + 5 + "px"    // 9px
"$" + 4 + 5     // $45
"4" - 2         // 2
"4px" - 2       // NaN
"  -9  " + 5    // " -9 5"
"  -9  " - 5    // -14
null + 1        // 1    (null se convierte 0 después de la conversion numérica.)
undefined + 1   //  NaN (undefined se convierte en NaN después de la conversion numérica.)
" \t \n" - 2    // -2   Los caracteres de espacio se eliminan del inicio y final de la cadena cuando una cadena se convierte en un número. Aquí toda la cadena consta de caracteres de espacio, como \t, \ny un espacio "regular" entre ellos. Entonces, de manera similar a una cadena vacía, se convierte en 0.

// Aquí hay un código que le pide al usuario dos números y muestra su suma.

// Funciona incorrectamente. El resultado en el ejemplo a continuación es 12(para valores de solicitud predeterminados).

// ¿Por qué? Arreglalo. El resultado debería ser 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

// Lo que sucede es que prompt("") ejecuta una ventana emergente que le pregunta al usuario "First number? y Second number?". Con un valor predeterminado establecido de 1 y 2 respectivamente.

// Y al momento de ingresarlos. estos se convierten a texto "1" y "2".

// Entonces hay que convertirlos a numero ya sea desde el momento en que se declaran o en el alert(), usando los "+" binarios y unario o Number():

let a = +prompt("First number", 1);
let b = +prompt("Second number?", 2);

alert(a + b);  // 3

// Tarea 5

// ¿Cuál será el resultado de estas expresiones?

5 > 4                   // true
"apple" > "pineapple"   // false
"2" > "12"              // true     2 es mayor que 1 (de "1"2) 
undefined == null       // true
undefined === null      // false
null == "\n0\n"         // false
null === +"\n0\n"       // false

//----------------------------------------------
 
// Tarea 6

// ¿Cuál es el resultado de OR?
// ¿Cuál es el siguiente código que va a salir?

alert( null || 2 || undefined );  // 2


// ¿Cuál es el resultado de las alertas OR'ed?
// ¿Qué generará el siguiente código?

alert( alert(1) || 2 || alert(3) );  // 1 y 2


// ¿Cuál es el resultado de Y?
//¿Qué va a mostrar este código?

alert( 1 && null && 2 );  // null

// ¿Cuál es el resultado de las alertas AND'ed?
// ¿Qué mostrará este código?

alert( alert(1) && alert(2) ); // 1 y undefined

// El resultado de O Y O
// ¿Cuál será el resultado?

alert( null || 2 && 3 || 4 );  // 3 Ya que && se ejecuta antes

// Compruebe el rango entre
// Escribe una if condición para comprobar que age está entre 14 o 90 inclusive.

//“Inclusivo” significa que age puede llegar a los bordes 14 o 90.

if (age >= 14 && age <= 90) {

}

// Compruebe el rango exterior
// Escribe una if condición para comprobar que ageNO está entre 14e 90inclusive.

// Cree dos variantes: la primera con NOT !, la segunda, sin ella.

if (!(age >= 14 && age <= 90))

if (age < 14 || age >90)

// Una pregunta sobre "if"
// ¿Cuál de estos alerts va a ejecutar?

// ¿Cuáles serán los resultados de las expresiones dentro if(...)?

if (-1 || 0) alert( 'first' );  // -1
if (-1 && 0) alert( 'second' );  // 0
if (null || -1 && 1) alert( 'third' );  // 1

// Calendario

let days = 31;
if (choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
    days = 30;
    } else if (choice === 'February') {
    days = 28;
}

//--------------------------------------------

// Tarea 7

// if (una cadena con cero)
// ¿Se mostrará alert?

if ("0") {
  alert( 'Hello' ); // No se mostrara, ya que "0" tiene como valor booleano "false".
}

// El nombre de JavaScript
// Usando la if..else, escriba el código que pregunta: '¿Cuál es el nombre "oficial" de JavaScript?'

//Si el visitante ingresa “ECMAScript”, entonces emite “¡Correcto!”, de lo contrario, emite: “¿No sabe? ECMAScript!”

let answer = prompt('¿Cuál es el nombre "oficial" de JavaScript?', '');
if (answer == 'ECMAScript'){
    alert ('¡Correcto!');
}   else {
    alert ('¿No sabe? ECMAScript!');
}

// Reescriba if con ?
// Reescribe esto if usando el operador condicional '?':

let result;

/* if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

let result = (a + b < 4) ? result = 'Below' : result = 'Over';

// Reescriba 'if..else' en '?'
// Reescriba if..else usando múltiples operadores ternarios '?'.

// Para facilitar la lectura, se recomienda dividir el código en varias líneas.

/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';

// Creando una función 

// 1- Para crear o declarar una función se utiliza:
function [nombre](argumento-1, argumento-2, ...) {
    // Código a ejecutar
};

// Cabe resaltar que no todas las funciones admiten argumentos, como en el caso de muchas API
// En otras, estos son mas bien opcionales.
// Y nosotros podemos crear funciones que admitan argumentos, si, los declaramos al momento de crear nuestra función. 

function hello(name = 'Chris', lastName = 'Doe') {
  console.log(`Hello ${name} ` + `${lastName}!`);
}

// Si ejecutamos la anterior función tal como esta, esta arrojara: Hello Chris Doe!

// Incluso si la llamamos posteriormente solo como :
// function hello();
// Arrojara lo siguiente: Hello Chris Doe!
// Ya que nosotros al escribir la función, establecimos que los atributos opcionales "name" y "lastName" tuvieran por defecto los valores predeterminados "Chris" y "Doe", respectivamente.

// Ahora, si nosotros queremos ejecutar la función con diferentes valores para los atributos establecidos, bastaría hacerlo de la siguiente forma:

hello('Ana', 'Castillo');

// Lo que arrojaría: Hello Ana Castillo!

// Funciones anónimas
//Porque no tiene nombre. A menudo verá funciones anónimas cuando una función espera recibir otra función como parámetro. En este caso, el parámetro de función a menudo se pasa como una función anónima.

// Nota: Hemos programado la condición de salida como i < cats.length, y no como i <= cats.length, porque los computadores cuentan desde 0, no 1 - inicializamos la variable i en 0, para llegar a i = 4 (el índice del último elemento del arreglo). cats.length responde 5, ya que existen 5 elementos en el arreglo, pero no queremos que i = 5, dado que respondería undefined para el último elemento (no existe un elemento en el arreglo con un índice 5). for the last item (there is no array item with an index of 5). Por ello, queremos llegar a 1 menos que cats.length (i <), que no es lo mismo que cats.length (i <=).

// Nota: Un error común con la condición de salida es utilizar el comparador "igual a" (===) en vez de "menor o igual a" (<=). Si queremos que nuestro bucle se ejecute hasta que i = 5, la condición de salida debería ser i <= cats.length. Si la declaramos i === cats.length, el bucle no debería ejecutarse , porque i no es igual a 5 en la primera iteración del bucle, por lo que debería detenerse inmediatamente.

// Cambiar la notación de la ultima iteración.
for (var i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}

//---------------- Cuenta regresiva ----------------

let output = document.querySelector('.output');
output.innerHTML = '';


for (let i = 10; i <= 10; i--) {
	if (i === 10) {
		const para = document.createElement('p');
		output.appendChild(para);
		para.textContent = `Cuenta regresiva en ${i}`;
	}else if ( i === 0 ){
		const para = document.createElement('p');
		output.appendChild(para);
		para.textContent = `¡Despegue!`;
		break;
	}else {
		const para = document.createElement('p');
		output.appendChild(para);
		para.textContent = `${i}`;
	}
}

//---------------- Lista de invitados -----------------

var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for ( var i = 0; i < people.length; i++ ){
	if ( people[i] === 'Phil' || people[i] === 'Lola' ){
		refused.textContent += people[i] + ', ';
	}else {
		admitted.textContent += people[i] + ', ';
	}
}

// Nota: Aquí tomamos los arreglos resultantes de "for" y les quitamos los dos últimos caracteres (la coma y el espacio), para remplazarlos con un punto.
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

//---------------------- Bucles while -----------------------
/* Ambos bucles tienen alert los mismos valores, ¿o no?

La forma del prefijo ++i: */

let i = 0;
while (++i < 5) alert( i ); // 1, 2, 3, 4.
// Finalmente, i = 4se incrementa a 5, la comparación
// while(5 < 5)falla y el ciclo se detiene. Así que 5 no se muestra.


/* La forma de posfijo i++ */

let i = 0;
while (i++ < 5) alert( i );// 1, 2, 3, 4, 5.

/* Detengámonos en i = 4. La forma de prefijo ++ila incrementaría y usaría 5en la comparación. Pero aquí tenemos la forma sufijo i++. Entonces se incrementa ia 5, pero devuelve el valor anterior. Por lo tanto, la comparación es realmente while(4 < 5)verdadera y el control continúa hasta alert.

El valor i = 5es el último, porque en el siguiente paso while(5 < 5)es falso. */

//---------------------- Bucles for ------------------------

// La forma de postfijo:

for (let i = 0; i < 5; i++) alert( i );


// La forma del prefijo:

for (let i = 0; i < 5; ++i) alert( i );

/* El incremento i++se separa de la verificación de condición (2). Esa es solo otra declaración.

El valor devuelto por el incremento no se usa aquí, por lo que no hay diferencia entre i++y ++i. */

//--------------------- Números pares ---------------------

for ( let i = 2; i <= 10; i++ ){
	if ( i % 2 == 0 ){
		alert(i);
	}
}

//-------------Reemplazar "for" con "while"----------------
/* Vuelva a escribir el código cambiando el for bucle por un while sin alterar su comportamiento (la salida debe permanecer igual). */

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;
while ( i < 3 ){
	alert( `number ${i}!` );
	i++;
}


//--------- Repita hasta que la entrada sea correcta --------

/* Escriba un bucle que solicite un número mayor que 100. Si el visitante ingresa otro número, pídale que lo ingrese nuevamente.

El ciclo debe solicitar un número hasta que el visitante ingrese un número mayor 100 o cancele la entrada/ingrese una línea vacía.

Aquí podemos suponer que el visitante solo ingresa números. No es necesario implementar un manejo especial para una entrada no numérica en esta tarea. */

let numMayor = prompt( 'Ingrese un numero mayor a 100', 0 );

while ( numMayor <= 100 && numMayor ){
	numMayor = prompt( 'Ingrese un numero mayor a 100', 0 );

}

// numMayor <= 100 -- Se repetirá el ciclo mientras el numero ingresado sea menor o igual a 100.
// && numMayor -- Esto repite el ciclo si numMayor tiene valor null o se ingresa una cadena vacía.

let n = 10;

nextPrime:
for ( let i = 2; i <= n; i++ ){
	for (let j = 2; j < i; j++) { // look for a divisor..
		if (i % j == 0) continue nextPrime; // not a prime, go next i
	  }
	
	  alert( i ); // a prime
}

//------------------------------------------------------------
// Objetos
//------------------------------------------------------------

//Se puede crear un objeto vacío ("gabinete vacío") usando una de dos sintaxis:

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

// Inmediatamente podemos poner algunas propiedades {...}como pares "clave: valor":

// Literales y propiedades--------------------------------

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

//Una propiedad tiene una clave (también conocida como "nombre" o "identificador") antes de los dos puntos ":"y un valor a la derecha.

//En el objeto user, hay dos propiedades:

//La primera propiedad tiene el nombre "name"y el valor "John".
//El segundo tiene el nombre "age"y el valor 30.

// Se puede acceder a los valores de propiedad mediante la notación de puntos:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

// El valor puede ser de cualquier tipo. Agreguemos uno booleano:

user.isAdmin = true;

user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,        // by key "age" store value 30
  isAdmin: true
};

// Para eliminar una propiedad, podemos usar el delete operador:

delete user.age;

// También podemos usar nombres de propiedades de varias palabras, pero luego deben estar entre comillas:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multi-word property name must be quoted
};

// La última propiedad de la lista puede terminar con una coma:

let user = {
  name: "John",
  age: 30,
}

// Corchetes-------------------------------------------

//Para propiedades de varias palabras, el punto de acceso no funciona:

// this would give a syntax error
user.likes birds = true

// Hay una "notación de corchetes" alternativa que funciona con cualquier cadena:

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

// Los corchetes también proporcionan una forma de obtener el nombre de la propiedad como resultado de cualquier expresión

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

// Ejemplo------------------------------

let user = {
  name: "John",
  age: 30,
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")
alert( user.key ) // undefined No funciona la notación de punto

// Propiedades calculadas-----------------------

// Podemos usar corchetes en un objeto literal, al crear un objeto. Eso se llama propiedades calculadas .

//Por ejemplo:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// El significado de una propiedad calculada es simple: [fruit]significa que el nombre de la propiedad debe tomarse de fruit.

//Entonces, si un visitante ingresa "apple", bag se convertirá en {apple: 5}.

//Esencialmente, eso funciona igual que:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
alert( bag.apple ); // 5 if fruit="apple"

// Podemos usar expresiones más complejas dentro de corchetes:

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// Taquigrafía del valor de la propiedad----------------------

//En código real, a menudo usamos variables existentes como valores para nombres de propiedades.
//Por ejemplo:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

// En lugar de name:name podemos simplemente escribir name, así:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

// Podemos usar propiedades normales y abreviaturas en el mismo objeto:

let user = {
  name,  // same as name:name
  age: 30
};

// Limitaciones de nombres de propiedad-------------------------

// Como ya sabemos, una variable no puede tener un nombre igual a una de las palabras reservadas del idioma como “for”, “let”, “return”, etc.

// Pero para una propiedad de objeto, no existe tal restricción:

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6

// Otros tipos se convierten automáticamente en cadenas.

Por ejemplo, un número 0se convierte en una cadena "0"cuando se usa como clave de propiedad:

let obj = {
  0: "test" // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

// Prueba de existencia de propiedad, operador "in"------

// La lectura de una propiedad que no existe simplemente devuelve undefined. Entonces podemos probar fácilmente si la propiedad existe:

let user = {};

alert( user.noSuchProperty === undefined ); // true significa: "no such property"

// También hay un operador especial "in"para eso.

//La sintaxis es:

"key" in object

//Por ejemplo:

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age existe
alert( "blabla" in user ); // false, user.blab no existe

// IMPORTANTE: Tenga en cuenta que en el lado izquierdo in debe haber un nombre de propiedad . Por lo general, es una cadena entrecomillada.
//Si omitimos las comillas, eso significa que una variable debe contener el nombre real que se va a probar. Por ejemplo:

let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists

// La mayoría de las veces la comparación con undefined funciona bien. Pero hay un caso especial cuando falla, pero "in"funciona correctamente.

//Es cuando existe una propiedad de objeto, pero almacena undefined:

let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj ); // true, the property does exist!

// El bucle "for..in" --------------------------------------
//Para caminar sobre todas las teclas de un objeto, existe una forma especial de bucle: for..in. Esto es algo completamente diferente del for(;;)constructo que estudiamos antes.

// La sintaxis:

for (key in object) {
  // executes the body for each key among object properties
}

// Por ejemplo, mostremos todas las propiedades de user:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

// Podríamos usar otro nombre de variable aquí en lugar de key. Por ejemplo, "for (let prop in obj)"también es ampliamente utilizado.

// Ordenado como un objeto -------------------------------

// ¿Están ordenados los objetos? En otras palabras, si recorremos un objeto, ¿obtenemos todas las propiedades en el mismo orden en que se agregaron? ¿Podemos confiar en esto?

// La respuesta corta es: "ordenadas de una manera especial": las propiedades enteras se ordenan, otras aparecen en orden de creación. Los detalles siguen.

//Como ejemplo, consideremos un objeto con los códigos telefónicos:

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

// El objeto se puede utilizar para sugerir una lista de opciones al usuario. Si estamos creando un sitio principalmente para una audiencia alemana, probablemente queramos 49ser los primeros.

// Pero si ejecutamos el código, vemos una imagen totalmente diferente:

// Estados Unidos (1) va primero luego Suiza (41) y así sucesivamente. Los códigos telefónicos van en orden ascendente porque son números enteros. Entonces vemos 1, 41, 44, 49.

// Nota: ¿Propiedades enteras? ¿Qué es eso?
// El término "propiedad de entero" aquí significa una cadena que se puede convertir de un entero a otro sin cambios.

// Por lo tanto, "49"es un nombre de propiedad entero, porque cuando se transforma en un número entero y viceversa, sigue siendo el mismo. Pero "+49"y "1.2"no son:

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

// Por otro lado, si las claves no son enteras, entonces se enumeran en el orden de creación, por ejemplo:

let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
}

// Entonces, para solucionar el problema con los códigos telefónicos, podemos "hacer trampa" haciendo que los códigos no sean enteros. Añadir un "+"signo más antes de cada código es suficiente.

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1