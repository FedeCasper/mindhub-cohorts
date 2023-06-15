import algo, { saludar, sumar } from './module/funciones.js'

saludar( 'Adrian' )

sumar( 15 , 10)

console.log("export defaul:",  algo )

algo.sumar( 20, 30 )
algo.restar( 10, 5 )

/* 
1-lo primero es ponerle al script -> type="module"

2-después tengo que crear la carpeta module y 
crear dentro el archivo donde voy a exportar las funciones y/o constantes 

3- crear las funciones y exportarlas 

4- importarlas donde las necesite
*/