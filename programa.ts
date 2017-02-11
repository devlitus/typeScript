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
class Programa{ //Program es la class padre
    public nombre: string;
    public version: number;
    getNombre(){
       return this.nombre;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }
    getVersion(){
        return this.version;
    }
    setVersion(version: number){
        this.version = version;
    }
}

class EditorVidio extends Programa{ //EditorVidio es la clase hija
    public timeLine: number;
    setTimeLine(timeLine:number){
        this.timeLine = timeLine;
    }
    getTimeLine(){
        return this.timeLine;
    }
    getAllData(): string{
        return this.getNombre()+ ' - ' +this.getVersion()+ ' - '+ this.getTimeLine();
    }
}
var editor = new EditorVidio();
editor.setNombre('Cantasia Estudio');
editor.setVersion(8);
editor.setTimeLine(4000);
console.log(editor.getAllData());
/*logica del formulario
* Crear una función, donde atrabes de un formulário genera una lista dinámica
* */
var programas = []; //variable de tipo Array
function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById('nombre')).value.toString(); //obtener el valor de la caja de texto con id 'nombre' del formulario y pasarlo a string
    var programa = new Programa(); // instancia de la class Programa
    programa.setNombre(nombre); //
    programa.setVersion(8); //
    programas.push(programa); // insertar un nuevo elemento en el Array
    var list = ''; //variable list iniciada a vacia
    for (var i = 0; i <programas.length; i++){ //recorrer el Array
        list = list+"<li>"+programas[i].getNombre()+'</li>';
    }
    var listado = <HTMLElement>document.getElementById('listado'); //apuntar al elemento listado del html
    listado.innerHTML = list; //imprimir el listado
    (<HTMLInputElement>document.getElementById('nombre')).value = ""; //linpiar el input d entrada
}
