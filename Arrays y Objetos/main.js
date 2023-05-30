// /* ARRAYS */
// let mentores = ["Lucre", "Nico", "Fede"]
// console.log(mentores)


// //push
// mentores.push("Kevin", "Cami")
// console.log(mentores)

// //pop
// mentores.pop()
// console.log(mentores)

// // shift
// // console.log(mentores.shift())
// let nombre = "Lucre"
// let miNombre = mentores.shift()

// let nombres = ["Juan", "Pedro"]
// nombres.push(miNombre)
// console.log(nombres)

// console.log(mentores)

// // unshift
// mentores.unshift(miNombre)
// console.log(mentores)

// // indexOf
// console.log(mentores.indexOf("Fede"))

// // includes
// console.log(mentores.includes("Nico"))

// // toString
// console.log(mentores.toString())

// // concat
// let mentoresWeb = ["Flor", "Cami", "Sil"]
// let mentoresFE = mentores.concat(mentoresWeb)
// console.log(mentoresWeb)

// // join
// console.log(mentores.join(" "))

// // reverse
// console.log(mentores.reverse())

// // slice 
// console.log(mentoresFE)
// console.log(mentoresFE.slice(1,4))

// // sort 
// console.log(mentoresFE.sort())

// // splice
// console.log(mentoresFE.splice(1,2,"Jose"))
// console.log(mentoresFE)

// /* OBJETOS */
let lucre = {
    nombre: "Lucrecia",
    apellido: "Gillone", 
    rol: "mentora", 
    modulo: "JS", 
    // mascota: {
    //     tiene: true,
    //     nombre: "Sasha",
    //     raza: "siames"
    // },
    edad: 27
}

let nico = { 
    nombre: "Nicolas",
    mascota: true,
    modulo2: "FrontEnd"
}

let fede = {
    modulo3: "Java",
    provincia: "Mendoza"
}

let lucre2 = lucre

// console.log(lucre == lucre2)
console.log(lucre)
let apellido = "apellido"

//llamar props de un obj
//notación de punto 
//objeto.propiedad

//notación de corchetes
//objeto["propiedad"]
console.log(lucre[apellido])

lucre.tecnologias = ["HTML", "CSS", "JS", "Reactjs"]
lucre.estatura = 1.60


// lucre.nombre = "Lucre"

console.log(Object.keys(lucre))

let objetoCombinado = Object.assign(lucre, nico, fede)

console.log(objetoCombinado)
console.log(Object.values(lucre))
console.log(Object.hasOwn(lucre, "modulop"))

// nico.nombre = "Nicolas Catriel"
nico.nombre += " Catriel"
nico.nombre = nico.nombre + " Catriel"
console.log(nico)
