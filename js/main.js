

/*****Ocultando y mostrando secciones******/

const $ = selector => document.querySelector(selector)


/*Capturo botones del menú*/
const botonBalance = $('.boton-balance')
const botonCategorias = $('.boton-categorias')
const botonReportes = $('.boton-reportes')


//Capturo secciones mediante id
const balance = $('#balance')
const categoria = $('#categoria')
const reportes = $('#reportes')


/*Funciones ocultando/mostrando secciones*/


let mostrarSeccionBalance = () =>{
   categoria.classList.add('oculto')
   reportes.classList.add('oculto')
   balance.classList.remove('oculto')
  
}

let mostrarSeccionCategoria = () =>{
   categoria.classList.remove('oculto')
   balance.classList.add('oculto')
   reportes.classList.add('oculto')

}

let mostrarSeccionReportes = () =>{
   reportes.classList.remove('oculto')
   balance.classList.add('oculto')
   categoria.classList.add('oculto')
}



/*Validando click de botones*/
botonBalance.addEventListener('click', mostrarSeccionBalance)
botonCategorias.addEventListener('click', mostrarSeccionCategoria)
botonReportes.addEventListener('click', mostrarSeccionReportes)
