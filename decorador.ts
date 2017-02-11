/**
 * Created by Carles on 11/02/2017.
 */

/*function arranque(lanzar: string){
    return function (target: Function) {
        target.prototype.lanzamiento = function(): void{
            alert(lanzar);
        }
    }
}
/!*
* El decorador sirve para ampliar la clase sin tener que implementar la funcion dentro de la misma clase
* *!/
@arranque('Lanzamiento del curso de Nodejs y Angular 2')*/
class Programa2{
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
var util = new Programa2();
// util.lanzamiento();