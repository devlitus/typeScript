/**
 * Created by Hot on 11/02/2017.
 */
/*
* public: alcance desde cualquier class, class heredadas y en todo el proyecto
* private: alcance solo desde su propia class
* protect: alcance solo dede su class y heredadas
* */
var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = 'Blanco';
        this.velocida = 0;
        if (modelo == null) {
            this.modelo = 'BMW generico';
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color; // palabra reservada this apunta a la propieda del objeto
    };
    Coche.prototype.acelerar = function () {
        this.velocida++;
    };
    Coche.prototype.frenar = function () {
        this.velocida--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocida;
    };
    return Coche;
}());
var myCoche = new Coche('renault'); //crea un objeto con la palabra reservada new
var myCoche_dos = new Coche();
var myCoche_tres = new Coche();
myCoche.setColor('rojo'); //utilizamos el metodo setColor() del objeto
myCoche.acelerar();
myCoche.acelerar();
myCoche.acelerar();
myCoche_dos.setColor('azul');
myCoche_tres.setColor('verde');
console.log('el modelo del coche 1 es: ' + myCoche.getModelo());
console.log('el color del coche 1 es: ' + myCoche.getColor());
console.log('la velocidad del coche 1 es: ' + myCoche.getVelocidad());
myCoche.frenar();
console.log('la velocidad despues de frenar del coche 1 es: ' + myCoche.getVelocidad());
/*
console.log('el color del coche 1 es: ' + myCoche.getColor()); // utilizamos el metodo getColor() del objeto
console.log('el color del coche 2 es: ' + myCoche_dos.getColor());
console.log('el color del coche 3 es: ' + myCoche_tres.getColor());*/
//# sourceMappingURL=coche.js.map