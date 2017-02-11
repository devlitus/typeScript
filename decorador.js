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
var Programa2 = (function () {
    function Programa2() {
    }
    Programa2.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa2.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa2.prototype.getVersion = function () {
        return this.version;
    };
    Programa2.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa2;
}());
var util = new Programa2();
// util.lanzamiento(); 
//# sourceMappingURL=decorador.js.map