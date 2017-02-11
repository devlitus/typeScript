/**
 * Created by Hot on 11/02/2017.
 */
function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
var nombre = "Carles Pedrero";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("conatiner");
etiqueta.innerHTML = resultado;
// variables y tipos de datos
var nombre = 'carles pedrero'; // esta variable solo acepta datos de tipo string
var todo = 'cualquier tipo de dato'; // esta variable acepta cualquier tipo de dato
var edad = 55; // esta variable solo acepta tipo de datos numero
var programado = true; // esta variable solo acepta datos de tipo boolean
var lang = ['PHP', 'javascript', 'css']; // esta Array solo acepta dato de tipo string
etiqueta.innerHTML = nombre + " -" + edad;
// diferencia entre var y let
var a = 7; // var declara variables globales
var b = 12;
if (a === 7) {
    var a_1 = 4; // let declara variable local
    var b = 1; // esta destrue la variable inicial por declararla como var
    console.log('dentro del if: ' + a_1 + " - " + b); // resultado 4 - 1
}
console.log('fuera del if:' + a + " - " + b); // resultado 7 - 1
//Funciones  y tipado
function devuelberNumero(num) {
    return "numero devuelto" + num;
}
function devuelberString(texto) {
    if (texto == 'hola') {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
function devuelberBoolean(texto) {
    if (texto == 'hola') {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
alert(devuelberNumero(34));
alert(devuelberString('hola'));
alert(devuelberBoolean('hola'));
//# sourceMappingURL=pruebas.js.map