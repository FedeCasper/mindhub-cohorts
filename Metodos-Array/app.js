const mentores = [
    {
        nombre: 'Nico',
        edad: 29,
        imagen: 'https://i.postimg.cc/Y2vWzKJQ/34040eea-fbd9-4a60-8a61-6afba83464a8.jpg',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'ReactJS', 'React Native', 'VueJS'],
        modulo: 'JS'
    },
    {
        nombre: 'Lucre',
        edad: 27,
        imagen: 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'ReactJS', 'React Native'],
        modulo: 'JS'
    },
    {
        nombre: 'Fede',
        edad: 38,
        imagen: 'https://i.postimg.cc/HWvrrZnj/72c679cc-25d9-479b-b69d-e959118e3ae5.jpg',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'Java', 'VueJS'],
        modulo: 'JS'
    },
    {
        nombre: 'Cami',
        edad: 28,
        imagen: 'https://www.diarioveterinario.com/images/showid2/4315158?w=900',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        modulo: 'WEB'
    },
    {
        nombre: 'Kev',
        edad: 32,
        imagen: 'https://static.wixstatic.com/media/d1fede_4f753f4736604e4ebf85029b92c769c3~mv2.jpg/v1/fill/w_640,h_454,al_c,lg_1,q_80,enc_auto/d1fede_4f753f4736604e4ebf85029b92c769c3~mv2.jpg',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
        modulo: 'WEB'
    },
    {
        nombre: 'Flor',
        edad: 32,
        imagen: 'https://p4.wallpaperbetter.com/wallpaper/630/552/841/look-kitty-background-baby-wallpaper-preview.jpg',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'VueJS'],
        modulo: 'WEB'
    },
    {
        nombre: 'Sil',
        edad: 37,
        imagen: 'https://i.postimg.cc/s2MfSyNL/4eab67e8-8718-46ce-907c-f032b6c67388.jpg',
        tecnologias: ['HTML', 'CSS', 'Testing'],
        modulo: 'WEB'
    },
]


// Funciones flechas
// Es otra manera de crear funciones
// Son siempre anonimas


// Si la funcion tiene 1 sola linea de ejecución, podemos sacar las llaves
// y el return se da por implicito
const sumar = (a, b) => a + b

// Si tienen un solo parametro podemos no ponerle parentesis
const saludar = nombre => console.log('hola '+ nombre)
/* saludar( 'Adrian' ) */

const arrayMentores = [
    {
        nombre: 'Nicolas',
        edad: 29,

        saludar: function () {
            console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
        }
    },
    {
        nombre: 'Lucre',
        edad: 27,

        saludar: () => {
            console.log(this)
            console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
        }
    }
]

// sort
arrayMentores.sort( ( a,b ) => {
    if( a.edad > b.edad ){
        return 1
    }
    if( a.edad < b.edad ){
        return -1
    }
    return 0
} )
// el this de las funciones flechas apunta al objeto global
/* console.log( 'El mentor que esta en el indice 1:', arrayMentores[1] )
arrayMentores[0].saludar() */


// forEach 
const numeros = [87, 56, 23, 41, 72, 95, 12, 68, 34, 51, 77, 63, 28, 49, 85, 10, 93, 19, 36, 80]
/* console.log(numeros)
function mostrarNumero( numero ){
    console.log( "Valor actual: ", numero )
}

numeros.forEach( mostrarNumero ) */

// -> mostrarNumero( 87, 0, numeros ) 
// -> mostrarNumero( 56, 1, numeros ) 
// -> mostrarNumero( 23, 2 numeros ) 
// -> mostrarNumero( 41, 3, numeros ) 


/* // findIndex
console.log( mentores )

const fnIndex = function( mentor){
    console.log(mentor.nombre)
   return mentor.nombre == 'Nico'
}
const indiceCami = mentores.findIndex( fnIndex )
console.log( indiceCami ) */

// Map
const fnMap = numero => numero * 100
const numerosPor100 = numeros.map( fnMap )
/* console.log( numerosPor100 ) */
// [ 8700, 5600,2300,4100 ]
// -> fnMap( 87, 0, numeros ) -> 8700
// -> fnMap( 56, 1, numeros ) -> 5600
// -> fnMap( 23, 2, numeros ) -> 2300
// -> fnMap( 41, 3, numeros ) -> 4100

// Filter
const fnFilter = numero => numero % 2 == 0
const numerosPares = numeros.filter( fnFilter )
/* console.log( numerosPares ) */
// [ 56, 72 ]
// -> fnFilter( 87, 0, numeros ) -> false
// -> fnFilter( 56, 1, numeros ) -> true
// -> fnFilter( 23, 2, numeros ) -> false
// -> fnFilter( 41, 3, numeros ) -> false
// -> fnFilter( 72, 4, numeros ) -> true

// Find
const primerNumeroPar = numeros.find( fnFilter )
/* console.log( primerNumeroPar ) */
// -> fnFind( 87, 0, numeros ) -> false
// -> fnFind( 56, 1, numeros ) -> true
// return 56

// Reduce 
/* console.log( 'Numeros:', numeros ) */

const fnReduce = ( acumulador, valorActual ) => {
  /*   console.log( 'Acumulador:', acumulador, 'valorActual:', valorActual ) */
    if( valorActual % 2 == 0 ){
        return valorActual
    }
    return acumulador
}

const resultadoReduce = numeros.reduce( fnReduce, 0 )

// -> fnReduce( 0, 87, 0, numeros )  
// -> fnReduce( true , 56, 1, numeros )  
// -> fnReduce( 143, 23, 2, numeros )  
// -> fnReduce( 166, 41, 3, numeros )
//...
// return acumulador

/* console.log( 'Return Reduce: ',  resultadoReduce ) */

const $lista = document.getElementById( 'lista' )

const mentoresJS = mentores.filter(function( mentor ){
    return mentor.modulo == "JS"
} )

const templateLi = mentoresJS.reduce( (acc, act) => {
    return acc + `\n <li> ${act.nombre} ${act.modulo} </li> `
}, '' )

$lista.innerHTML = templateLi

