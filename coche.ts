/**
 * Created by Hot on 11/02/2017.
 */
/*
* public: alcance desde cualquier class, class heredadas y en todo el proyecto
* private: alcance solo desde su propia class
* protect: alcance solo dede su class y heredadas
* */
class Coche{ //definir el objeto con la palabra resarvada class
    public color: string; //propiedades del objeto acceso publico
    public modelo: string; //propiedades del objeto
    public velocida: number; //propiedades del objeto

    constructor(modelo: any = null){ // metodo constructor del objeto pasandole como parametro por defecto
        this.color = 'Blanco';
        this.velocida = 0;
        if(modelo == null){
            this.modelo = 'BMW generico';
        }else {
            this.modelo = modelo;
        }
    }
    public getModelo(){
        return this.modelo;
    }
    public  setModelo(modelo: string){
        this.modelo = modelo;
    }
    public getColor(){ //metodo get del objeto, devuelve el valor de la propiedad
        return this.color;
    }
    public setColor(color: string){ //metodo set del objeto, asigna valor a la propiedad
        this.color = color; // palabra reservada this apunta a la propieda del objeto
    }
    public acelerar(){
        this.velocida++;
    }
    public frenar(){
        this.velocida--;
    }
    public getVelocidad():number{
       return this.velocida;
    }
}
var myCoche = new Coche('renault'); //crea un objeto con la palabra reservada new
var myCoche_dos = new Coche();
var myCoche_tres = new Coche();
myCoche.setColor('rojo'); //utilizamos el metodo setColor() del objeto
myCoche.acelerar();
myCoche.acelerar();
myCoche.acelerar();
myCoche_dos.setColor('azul');
myCoche_tres.setColor('verde');
console.log('el modelo del coche 1 es: '+ myCoche.getModelo());
console.log('el color del coche 1 es: ' + myCoche.getColor());
console.log('la velocidad del coche 1 es: ' + myCoche.getVelocidad());
myCoche.frenar();
console.log('la velocidad despues de frenar del coche 1 es: ' + myCoche.getVelocidad());

/*
console.log('el color del coche 1 es: ' + myCoche.getColor()); // utilizamos el metodo getColor() del objeto
console.log('el color del coche 2 es: ' + myCoche_dos.getColor());
console.log('el color del coche 3 es: ' + myCoche_tres.getColor());*/
