//crear una lista con los nombres de los mentores
let lista = document.getElementById("lista")
let galeria = document.getElementById("galeria")
// let parrafo = document.getElementById("parrafo")

function crearLista(mentor){
    return `<li>${mentor.nombre}</li>`
}

function mostrarLista(array, elementoHTML){
    let template = ""
    for (let elemento of array){
        template += crearLista(elemento)
    }
    // console.log(template)
    elementoHTML.innerHTML += template
}

mostrarLista(mentores, lista)
// mostrarLista(mentores, parrafo)

function crearNodo(objeto){
    console.log(objeto)
    let img = document.createElement("img")
    img.src = objeto.imagen
    img.classList.add("imagen")
    //img.className = "laClaseQueQuiero"
    let p = document.createElement("p")
    p.textContent = objeto.nombre
    let div = document.createElement("div")
    div.append(img, p)
    return div
}

function mostrarNodo(array, elementoHTML){
    let fragment = document.createDocumentFragment()
    for (let elemento of array){
        fragment.appendChild(crearNodo(elemento))
    }
    console.log(fragment)
    elementoHTML.appendChild(fragment)
}



mostrarNodo(mentores, galeria)

// galeria.appendChild(img)
// galeria.appendChild(p)

// console.log([img])