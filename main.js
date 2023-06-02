//METODOS STRING
// --------------------

console.log([String]); /*Objeto String*/

//toLowerCase()
const nombre = "FEDERICO"
const nombre2 = "LuCRe"
console.log(nombre.toLowerCase());
console.log(nombre2.toLowerCase());

//toUpperCase()
const nombre3 = "NicO"
console.log(nombre3.toUpperCase());

//substring(indexStart, indexEnd)
const nombre4 = "JAZMIN"
console.log(nombre4.substring());
console.log(nombre4.substring(1,3));

// slice(start,end)
const nombre5 = "Martin"
console.log(nombre5.slice(3));
console.log(nombre5.slice(0,1));

// trim
const nombre6 = "   Mauro    "
const nombre7 = "   Ma uro    "
console.log(nombre6.trim());
console.log(nombre7.trim());

// includes
const nombre8 = "Santy"
console.log(nombre8.includes("a"));
console.log(nombre8.includes("x"));
console.log(nombre8.includes("anty"));
console.log(nombre8.includes("anthy"));

// startsWith
const nombre9 = "Jordi"
console.log(nombre9.startsWith("J"));
console.log(nombre9.startsWith("j"));
console.log(nombre9.startsWith("N"));
console.log(nombre9.startsWith("Jor"));
console.log(nombre9.toLowerCase().startsWith("j"));

// replace(que reemplza, por que lo reemplaza)
const frase1 = "La Rama Blanca"
console.log(frase1.replace('Blanca', 'Verde'));
console.log(frase1.replace('a', 'x'));

// replaceAll
const frase = "La Rama Blanca"
console.log(frase.replaceAll('a', 'x'));

// repeat
const frase3 = "Colombia! "
console.log(frase3.repeat(10).trim());


// METODOS NUMBER
// --------------------

console.log([Number]); /*Objeto Number*/

console.log(Number(4));
console.log(Number("261895712"));

// parseInt (convierte un string a número entero o un número flotante a numero entero)
const num1 = 10;
console.log(parseInt(10)); 
console.log(parseInt(10.50)); 
console.log(parseInt(10.30));
console.log(parseInt(10.70));  
console.log(parseInt(145.99));
console.log(parseInt("145.99"));
console.log(parseInt("Hola"));

let resultado1 = parseInt(14.50)
console.log(resultado1);

// parseFloat (convierte un string a un número flotante)
console.log(parseFloat(165));
console.log(parseFloat(165.45));
console.log(parseFloat("165.45"));
console.log(parseFloat("Hola"));

let resultado2 = parseFloat(156.23)
console.log(resultado2);

// toFixed
const numero3 = 456.98452651
console.log(numero3);
const resultado = numero3.toFixed(2)
console.log(resultado);

console.log("Esta es la variable: ", typeof(numero3));
console.log("Este es el resultado:" , typeof(resultado));

const resultadoConvertido = Number(resultado)
console.log(resultadoConvertido);

console.log("123" + "546");
console.log(123 + 546);

// isNaN
const num3 = 10;
console.log( isNaN(5) );
console.log( isNaN("F") );
console.log( isNaN(num3) );

// METODOS MATH
// --------------------

console.log([Math]); /*Objeto Math*/

// // min
const numX = 10;
const numY = 5;

const numeroMenor = Math.min(40, 10);
console.log("El número menor es: ", numeroMenor);

// max
const numW = 10;
const numZ = 5;

const numeroMayor = Math.max(numW, numZ);
console.log("El número más grande: ", numeroMayor);

const prueba = Math.max("A", "B");
console.log(prueba);

// random
console.log( parseInt(Math.random() * 5) ); 
console.log( parseInt(Math.random() * 5) ); 
console.log( parseInt(Math.random() * 5) ); 
console.log( parseInt(Math.random() * 5) ); 
console.log( parseInt(Math.random() * 5) ); 

// round
console.log(Math.round(4.11)); 
console.log(Math.round(4.5)); 
console.log(Math.round(4.99)); 

// floor(redondea hacia abajo)
console.log(Math.floor(4.24));
console.log(Math.floor(4.53));
console.log(Math.floor(4.99));

// ceil(redondea hacia arriba)
console.log(Math.ceil(4.24));
console.log(Math.ceil(4.53));
console.log(Math.ceil(4.99));

// declaracion tiene parametros | no tienen valor definido
function suma (stringSaludo , stringNombre){
     return stringSaludo + stringNombre
}

console.log(suma);

const saludo = "Hola"
const nombres = "Eva"

// ejecución tiene argumentos | tienen un valor definido
console.log(suma("Bienvenidos","Federicos"));
console.log(suma("Hola","Fede"));
