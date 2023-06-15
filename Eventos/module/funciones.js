export function imprimirTarjetas( listaMentores, contenedor ){
    let template = ''
    for (const mentor of listaMentores) {
        const tarjeta = crearTarjeta( mentor )
        template += tarjeta
    }
    contenedor.innerHTML = template
}

export function handleChange ( $contenedor ){

    const mentoresFiltrados = filtrarPorCheck( mentores )
    imprimirTarjetas( mentoresFiltrados, $contenedor )

}

export function crearTarjeta( objeto ){
    return `<div class="card border-primary col-3">
    <img class="card-img-top" src="${objeto.imagen}" alt="Title">
    <div class="card-body">
      <h4 class="card-title">${objeto.nombre}</h4>
      <p class="card-text"> modulo: ${objeto.modulo}</p>
    </div>
  </div>`
}

// generar un escuchador de evento para los check

export function filtrarPorCheck( listaMentores ){

    const checkbox =  [...document.querySelectorAll( 'input[type=checkbox]:checked')].map( check => check.value )
    if( checkbox.length == 0 ){
        return listaMentores
    }else{
        const mentoresFiltrados = listaMentores.filter( mentor => checkbox.includes( mentor.modulo ) )
        return mentoresFiltrados
    }
    
   
}
// una funcion que cree los checkbox
export function crearCheck( modulo ){
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
export function pintarCheckbox( modulos, elemento ){


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
