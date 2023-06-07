const $form = document.getElementById('form-checkbox')
const $contenedor = document.getElementById('contenedor-mentores')

const arrayModulosSinRepetidos = Array.from( new Set(mentores.map( mentor => mentor.modulo ) )  )
pintarCheckbox( arrayModulosSinRepetidos, $form )
imprimirTarjetas( mentores, $contenedor )

$form.addEventListener( 'change', handleChange)


function crearTarjeta( objeto ){
    console.log(objeto.nombre)
    return `<div class="card border-primary col-3">
    <img class="card-img-top h-75" src="${objeto.imagen}" alt="Title">
    <div class="card-body">
      <h4 class="card-title">${objeto.nombre}</h4>
      <p class="card-text"> modulo: ${objeto.modulo}</p>
      <a class="btn btn-primary" href="./detalle.html?nombre=${objeto.nombre}"> ver detalle </a>
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
function pintarCheckbox( modulos, elemento ){
    const fragment = document.createDocumentFragment()

    for (const modulo of modulos) {
        const div = crearCheck( modulo )
        fragment.appendChild( div )
    }

    elemento.appendChild( fragment )
} 
