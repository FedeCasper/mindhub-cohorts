// DOM Document Object Model

// console.log([document.children[0].children[1].children[0].children])

//get Element By

let titulo = document.getElementById("titulo")
// console.log(titulo.textContent = "Workshop de Manejo de Dom")
// console.log([titulo.className = "text-danger"])

let links = document.getElementsByClassName("link")
// console.log(links)
let anchors = document.getElementsByTagName("a")
// console.log(anchors)

// query Selector
// document.querySelector("selector") primer elemento que coicida con el selector

// console.log(document.querySelectorAll(".link"))
//todos los elementos que coincidan con el selector

console.log(mentores)

let seccion = document.getElementById("contenedor")
console.log([seccion])

// for (let mentor of mentores){
//     seccion.innerHTML += `<article class="border">
//                         <h5>${mentor.nombre}</h5>
//                         <img src="${mentor.imagen}" alt="img" class="img">
//                         <p>modulo:${mentor.modulo}</p>
//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iste earum adipisci deleniti in sint.</p>
//                     </article>`
// }

function crearPlantilla(objeto){
    return `<article class="border p-2">
                <h5>${objeto.nombre}</h5>
                <img src="${objeto.imagen}" alt="img" class="img mb-2">
                <p>modulo: ${objeto.modulo}</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure iste earum adipisci deleniti in sint.</p>
            </article>`
}

function imprimirDatos(array, elementoHTML){
    let template = ""
    for (let mentor of array){
        template += crearPlantilla(mentor)
    }
    console.log(template)
    elementoHTML.innerHTML += template
}

imprimirDatos(mentores, seccion)