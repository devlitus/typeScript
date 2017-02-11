/**
 * Created by Carles on 11/02/2017.
 */
/*
 * funciones de flecha
 * Son funciones callback
 * se definen son el simbolo => y se quita la palabra reservada function
 */
//sin variable
setInterval(function () {
    console.log('hola');
}, 1000);
//con variable
var nombre_variable;
setInterval(nombre_variable, function (otra_variable) {
    console.log('hola');
}, 1000);
var frutas = [
    'manzana',
    'naranja',
    'platano'
];
/*
 * con la funcion flecha i el metodo map recorre el array
 * */
var recorrer = frutas.map(function (fruta) {
    console.log(fruta);
    console.log(fruta.length);
});
//# sourceMappingURL=funcion_flecha.js.map