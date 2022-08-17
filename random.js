

// 

// function bienvenidx(){
//     let nombre = prompt("Ingrese nombre")
//     alert("Bienvenidx al Club del VHS, "+ nombre)
// }
// const randomTerror = document.getElementById("randomTerror");


// function peliculaRandom (){
//     let pelisBoton = document.addEventListener("click");
//     let x;
//     switch(pelisBoton) {
//         case "terror":
//             x = "Get Out: Un joven va por primera vez a la casa de sus futuros suegros, una serie de descubrimientos hacen ese encuentro inquietante";
//             document.getElementById("resultadoBoton").innerHTML = x;
//             break;
//         case "comedia":
//             x = "The big Lebowski: Todo empieza cuando el protagonista, un tipo común es confundido por un multi millonario";
//             document.getElementById("resultadoBoton").innerHTML = x;
//             break;
//         case "sci-fi":
//             x = "Doce monos: Ocurre en un futuro post-apocalíptico, año 2035";
//             document.getElementById("resultadoBoton").innerHTML = x;
//             break;
//         case "suspenso":
//             x = "Promising young woman: Cassie vive una doble vida hasta que un encuentro inesperado le da la oportunidad de corregir errores del pasado";
//             document.getElementById("resultadoBoton").innerHTML = x;
//             break;
//     default:
//         x = "Podes probar con: terror, comedia, sci-fi o crimen";
//     }
//     return x;
// }

// randomTerror.addEventListener("click", () => {
//     alert("hola");
// });
// let boton = document.getElementById("botonRandom");
// boton.addEventListener("click" , () => {
//     let genero = prompt("La selección de peliculas random de la semana. \n ¿Qué genero de pelicula querés ver?  \n ingrese % para salir");
// })



// let genero = prompt("La selección de peliculas random de la semana. \n ¿Qué genero de pelicula querés ver?  \n ingrese & para salir");
// while (genero != "&"){
//     resultado = peliculaRandom(genero);
//     alert("Tu peli random del día es: " + resultado)
//     genero = prompt("Qué genero de pelicula querés ver?  \n ingrese & para salir");
// }

const botonTerror = addEventListener("click", function() {
    document.getElementById("resultadoBoton").innerHTML = "Get Out: Un joven va por primera vez a la casa de sus futuros suegros, una serie de descubrimientos hacen ese encuentro inquietante";
});
const botonComedia = addEventListener("click", function() {
    document.getElementById("resultadoBoton").innerHTML = "The big Lebowski: Todo empieza cuando el protagonista, un tipo común es confundido por un multi millonario";
});
const botonScifi = addEventListener("click", function() {
    document.getElementById("resultadoBoton").innerHTML = "Doce monos: Ocurre en un futuro post-apocalíptico, año 2035";
});
const botonSuspenso = addEventListener("click", function() {
    document.getElementById("resultadoBoton").innerHTML = "Promising young woman: Cassie vive una doble vida hasta que un encuentro inesperado le da la oportunidad de corregir errores del pasado";
});

if (condition) {
    
} else {
    
}