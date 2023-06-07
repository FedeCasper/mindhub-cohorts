const $contenedor = document.getElementById('contenedor-mentor')

console.log( location.search )

const params = new URLSearchParams( location.search )

const nombre = params.get('nombre') 

const mentorEncontrado = mentores.find( elemento => elemento.nombre === nombre ) 



console.log( mentorEncontrado )

$contenedor.innerHTML = `
    <div class="card border-primary col-8">
    <img class="card-img-top h-50" src="${mentorEncontrado.imagen}" alt="Title">
    <div class="card-body">
    <h4 class="card-title">${mentorEncontrado.nombre}</h4>
    <p class="card-text">Modulo: ${mentorEncontrado.modulo}</p>
    <p class="card-text">Edad: ${mentorEncontrado.edad}</p>
    </div>
    </div>
`

