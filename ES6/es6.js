// ternarios
// condicion ? si se cumple : si no se cumple
const numero = 10
const parImpar = numero % 2 == 0 ? "par" : "impar"

/* if( numero % 2 == 0 ){
    parImpar = "par"
}else{
    parImpar = "impar"
}  */

const mentor = {
    nombre : 'Nicolas',
    edad : 17
}

const copiaMentor = mentor

const copiaReal = Object.assign( {}, mentor )
console.log("mentor:",mentor)
console.log("copia real:",copiaReal)
/*
console.log( `Soy ${ mentor.edad >= 18 ? 'mayor' : 'menor' }` )

console.log( parImpar ) */

// destructuring

const edad = mentor.edad
const nombreMentor = mentor.nombre
/* const nombre = "Catriel"
const { edad , nombre:nombreMentor  } = mentor */

/* console.log( "nombre:", nombreMentor )
console.log(edad) */
/* 
function saludar( { nombre, edad } ){
    console.log( `Hola soy ${nombre} y tengo ${edad} años` )
}
saludar( mentor ) */

const nombres = [ "fede", "nico", "lucre", "adrian", "andres", "carlos", "elena"]

/* const primerElemento = nombres[0]
const segundoElemento = nombres[1]

const [ primerNombre, segundoNombre ] = nombres

console.log( primerNombre, segundoNombre ) */

// spread ...

const lucre = {
    nombre : 'Lucre',
    edad: 27
}

const numeros = [ 1, 2, 3]
const copiaNumeros = [ ...numeros ]
const listItems = document.querySelectorAll( 'li' )
console.log( [ ...listItems  ].map( li => li.textContent ))
const apellido = [..."cirulli"]
const copiaLucre = {...lucre}
copiaLucre.edad = 30
console.log(lucre)


function ordenarNumeros(listaNumeros){
    return [...listaNumeros].sort( (a,b) => b-a )
}
console.log( "original:",numeros )

console.log( "ordenado:", ordenarNumeros( numeros ) )

console.log( mentores )

const nuevoArrayMentores = [...mentores ]

console.log( "mentores es igual a nuevoArrayMentores:",mentores == nuevoArrayMentores)
console.log("primer elemento de mentores y primer elemento de la copia:", mentores[0] == nuevoArrayMentores[0] )

// export - import


