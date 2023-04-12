const container = document.querySelector( '#container' );

const parrafo = document.createElement('p');
parrafo.classList.add( 'textoRojo' );
parrafo.style.color = 'red';
parrafo.textContent = '¡Oye soy rojo!';
container.appendChild(parrafo);

const titulo3 = document.createElement( 'h3' );
titulo3.classList.add( 'textoAzul' );
titulo3.style.color = 'blue';
titulo3.textContent = '¡Soy un encabezado azul!';
container.appendChild(titulo3);

const rosa = document.createElement( 'div' );
rosa.classList.add( 'rosaNegro' );
rosa.style.cssText = 
'border: 1px solid black; background: pink;';
container.appendChild(rosa);

const titulo1 = document.createElement( 'h1' );
titulo3.classList.add( 'titulo1' );
titulo3.textContent = '¡Estoy en un div!';
rosa.appendChild(titulo3);

const parrafo2 = document.createElement('p');
parrafo2.classList.add( 'parrafo2' );
parrafo2.textContent = '¡Yo también!';
rosa.appendChild(parrafo2);

const btn2 = document.querySelector( '#btn2' );
btn2.onclick = () => alert( 'Hello World 2' );

const btn3 = document.querySelector( '#btn3' );
btn3.addEventListener( 'click', () => {
    alert( 'Hello World 3' );
} );

/* btn.addEventListener('click', function (e) {
    console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
}); */

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('.buttonItem');

// we use the .forEach method to iterate through each button
buttons.forEach((buttonItem) => {

  // and for each one we add a 'click' listener
  buttonItem.addEventListener('click', () => {
    alert(buttonItem.id);
  });
});