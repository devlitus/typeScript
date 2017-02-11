var Coche1 = (function () {
    function Coche1(modelo) {
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
    Coche1.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche1.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche1.prototype.getColor = function () {
        return this.color;
    };
    Coche1.prototype.setColor = function (color) {
        this.color = color; // palabra reservada this apunta a la propieda del objeto
    };
    Coche1.prototype.acelerar = function () {
        this.velocida++;
    };
    Coche1.prototype.frenar = function () {
        this.velocida--;
    };
    Coche1.prototype.getVelocidad = function () {
        return this.velocida;
    };
    return Coche1;
}());
var myCoche = new Coche1('renault');
console.log('el modelo del coche 1 es: ' + myCoche.getModelo());
//# sourceMappingURL=interfaces.js.map