// un lugar donde poner esos checkbox
const $form = document.getElementById('form-checkbox')
// referencia al contenedor de las tarjetas
const $contenedor = document.getElementById('contenedor-mentores')



// obtener los modulos
// Creo el array 
const modulos = mentores.map( mentor => mentor.modulo )
// Creo un set para eliminar los repetidos
const modulosSinRepetidos = new Set( modulos )
// lo vuelvo a pasar a array para tener disponible los metodos de array
const arrayModulosSinRepetidos = Array.from( modulosSinRepetidos )
// hacer los checkbox dinamicos
pintarCheckbox( arrayModulosSinRepetidos, $form )
// primera carga de los mentores
imprimirTarjetas( mentores, $contenedor )

// pongo un eventListener para cuando cambian los checkbox
$form.addEventListener( 'change', handleChange)

// ponerle un escuchador de eventos a los checkbox

// poder crear y mostrar las cards

function crearTarjeta( objeto ){
    return `<div class="card border-primary col-3">
    <img class="card-img-top" src="${objeto.imagen}" alt="Title">
    <div class="card-body">
      <h4 class="card-title">${objeto.nombre}</h4>
      <p class="card-text"> modulo: ${objeto.modulo}</p>
    </div>
  </div>`
}

function imprimirTarjetas( listaMentores, contenedor ){
    let template = ''
    for (const mentor of listaMentores) {
        const tarjeta = crearTarjeta( mentor )
        template += tarjeta
    }
    contenedor.innerHTML = template
}

// generar un escuchador de evento para los check
function handleChange (event){

    const mentoresFiltrados = filtrarPorCheck( mentores )
    imprimirTarjetas( mentoresFiltrados, $contenedor )

}

function filtrarPorCheck( listaMentores ){

    const checkbox = Array.from( document.querySelectorAll( 'input[type=checkbox]:checked' ) ).map( check => check.value )
    if( checkbox.length == 0 ){
        return listaMentores
    }else{
        const mentoresFiltrados = listaMentores.filter( mentor => checkbox.includes( mentor.modulo ) )
        return mentoresFiltrados
    }
    
   
}
// una funcion que cree los checkbox
function crearCheck( modulo ){
    const div = document.createElement('DIV')
    div.classList.add( 'form-check' )

    const input = document.createElement( 'INPUT' )
    input.type = "checkbox"
    input.className = "form-check-input"
    input.value = modulo
    input.id = `${modulo}-check` //-> JS-check
    input.name = "modulo"

    const label = document.createElement('LABEL')
    label.className = "form-check-label"
    label.setAttribute('for',`${modulo}-check`)
    label.textContent = modulo
    label.style = "cursor:pointer"

    div.appendChild(input)
    div.appendChild(label)

    return div
} 

// una funcion que llevo los checkbox al dom
function pintarCheckbox( modulos, elemento ){


    const fragment = document.createDocumentFragment()

    for (const modulo of modulos) {
        const div = crearCheck( modulo )
        fragment.appendChild( div )
    }

    elemento.appendChild( fragment )

    // con inner
   /*  let template = modulos.reduce( (acc, act) => {
        return acc+ `<div class="form-check">
        <input class="form-check-input" type="checkbox" value=${act} id="check-${act}">
        <label class="form-check-label" for="check-${act}">
         ${act}
        </label>
      </div>`
    }, '' )
    console.log( template )
    elemento.innerHTML = template */

} 
