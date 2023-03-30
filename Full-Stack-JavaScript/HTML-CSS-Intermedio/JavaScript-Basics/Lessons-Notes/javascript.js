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

    