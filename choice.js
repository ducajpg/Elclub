// class Peliculas{
//     constructor(titulo, estreno, genero, genero2, ranking){
//         this.titulo = titulo;
//         this.estreno = estreno;
//         this.genero = genero;
//         this.genero2 = genero2;
//         this.ranking = parseFloat(ranking);
//     }
// }
// const pelis = [];
// pelis.push(new Peliculas("Terminator", 1984, "sci-fi", "accion", 8.1))
// pelis.push(new Peliculas("Las brujas de Eastwick", 1987, "comedia", "fantasia", 6.5))
// pelis.push(new Peliculas("Blade runner", 1982, "sci-fi", "drama", 8.1))
// pelis.push(new Peliculas("Mad max", 2015, "accion", "sci-fi", 8.1))
// pelis.push(new Peliculas("Groundhog Day", 1993, "comedia", "fantasia", 8.1))
// pelis.push(new Peliculas("The Silence of the Lambs", 1991, "crimen", "suspenso", 8.6))
// pelis.push(new Peliculas("John Wick", 2014, "crimen", "accion", 7.4))
// pelis.push(new Peliculas("Clueless", 1995, "comedia", "romance", 6.9))
// pelis.push(new Peliculas("El padrino", 1972, "crimen", "drama", 9.2))
// pelis.push(new Peliculas("Matrix", 1999, "accion", "sci-fi", 8.7))

// const inputPeli = document.getElementById('inputPeli');
// localStorage.setItem('nombre', inputPeli)
// let filtrogenero = prompt("Ingrese el genero que busca")
// const filtrogenero = pelis.filter(e => e.genero.includes (pelisBuscada))
// console.log(filtrogenero);



// const opcionesGenero = document.getElementById('opcionesGenero').value;
// let filtroGenero = () => {
//     opcionesGenero = pelis.filter(e => e.genero.includes (pelisBuscada))
//     console.log(filtrogenero);

// }

// const resultado = pelis.filter(elemento => {
//     return elemento.genero === "comedia" && elemento.ranking === "8.1";
// });

// console.log(resultado);

// function filtroRanking (Peliculas){
//     return this.ranking >= opcionesRanking
// }
// console.log(filtroRanking());

const peliculas = [
    {nombre: "Terminator", estreno: 1984, genero: "sci-fi", genero: "accion", ranking: parseInt(8.1)},
    {nombre: "Las brujas de Eastwick", estreno: 1987, genero: "comedia", genero: "fantasia", ranking: parseInt(6.5)},
    {nombre: "Blade runner", estreno: 1982, genero: "sci-fi", genero: "drama", ranking: parseInt(8.1)},
    {nombre: "Mad max", estreno: 2015, genero: "sci-fi", genero: "accion", ranking: parseInt(8.1)},
    {nombre: "Groundhog Day", estreno: 1993, genero: "comedia", genero: "fantasia", ranking: parseInt(8.1)},
    {nombre: "The Silence of the Lambs", estreno: 1991, genero: "crimen", genero: "supenso", ranking: parseInt(8.6)},
    {nombre: "John Wick", estreno: 2014, genero: "crimen", genero: "accion", ranking: parseInt(7.4)},
    {nombre: "Clueless", estreno: 1995, genero: "comedia", genero: "romance", ranking: parseInt(6.9)},
    {nombre: "El padrino", estreno: 1972, genero: "crimen", genero: "drama", ranking: parseInt(9.2)},
    {nombre: "Matrix", estreno: 1999, genero: "sci-fi", genero: "accion", ranking: parseInt(8.7)}
]
const opcionesRanking = document.getElementById('opcionesRanking').value;
parseInt(opcionesRanking);
const opcionesGenero = document.getElementById("opcionesGenero").value;

let generoFiltro = peliculas.filter(function (e) {
    return e.genero == opcionesGenero;
})
let rankingFiltro = peliculas.filter(function (e) {
    return e.ranking > opcionesRanking;
});
console.log(rankingFiltro);
console.log(generoFiltro);
