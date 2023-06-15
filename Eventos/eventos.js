import { pintarCheckbox, imprimirTarjetas, handleChange } from './module/funciones.js'

const $form = document.getElementById('form-checkbox')
const $contenedor = document.getElementById('contenedor-mentores')

const arrayModulosSinRepetidos =  [ ...new Set(  mentores.map( mentor => mentor.modulo )  ) ] 

pintarCheckbox( arrayModulosSinRepetidos, $form )
imprimirTarjetas( mentores, $contenedor )

$form.addEventListener( 'change', () => {
    handleChange( $contenedor )
})

