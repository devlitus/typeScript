var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Carles on 11/02/2017.
 */
/*
*Herencia sirve para heredar todos los metodos de la clase padre.
*Se declara con la palabra reservada extends
*Primero se declara la clase hijo y luego de extens la clase padre.
*
* <HTMLInputElement> con esta sentencia especificamos el elemento del DOM
* */
var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var EditorVidio = (function (_super) {
    __extends(EditorVidio, _super);
    function EditorVidio() {
        _super.apply(this, arguments);
    }
    EditorVidio.prototype.setTimeLine = function (timeLine) {
        this.timeLine = timeLine;
    };
    EditorVidio.prototype.getTimeLine = function () {
        return this.timeLine;
    };
    EditorVidio.prototype.getAllData = function () {
        return this.getNombre() + ' - ' + this.getVersion() + ' - ' + this.getTimeLine();
    };
    return EditorVidio;
}(Programa));
var editor = new EditorVidio();
editor.setNombre('Cantasia Estudio');
editor.setVersion(8);
editor.setTimeLine(4000);
console.log(editor.getAllData());
/*logica del formulario
* Crear una función, donde atrabes de un formulário genera una lista dinámica
* */
var programas = []; //variable de tipo Array
function guardar() {
    var nombre = document.getElementById('nombre').value.toString(); //obtener el valor de la caja de texto con id 'nombre' del formulario y pasarlo a string
    var programa = new Programa(); // instancia de la class Programa
    programa.setNombre(nombre); //
    programa.setVersion(8); //
    programas.push(programa); // insertar un nuevo elemento en el Array
    var list = ''; //variable list iniciada a vacia
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + '</li>';
    }
    var listado = document.getElementById('listado'); //apuntar al elemento listado del html
    listado.innerHTML = list; //imprimir el listado
    document.getElementById('nombre').value = ""; //linpiar el input d entrada
}
//# sourceMappingURL=programa.js.map