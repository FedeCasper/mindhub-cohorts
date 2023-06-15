export function saludar( nombre ){
    console.log("hola " + nombre)
} 

export function sumar ( a , b){
    console.log( a + b )
}

function restar ( a, b){
    console.log(a-b)
}
export default {
    saludar,
    sumar,
    restar
}