/**
 * Created by Carles on 11/02/2017.
 */
/*
* interface sirve para implementar class.
* Se declara la interface con la palabra reservada implement y el nombre de la interface.
* Si no se definen los métodos de la interface en la class se produce un error de transpilación ya que és de cumplimiento obligatorio
* */
interface ConcheBase{
    getModelo(): string;
    getVelocidad(): number;
}
class Coche1 implements ConcheBase{
    public color: string;
    public modelo: string;
    public velocida: number;

    constructor(modelo: any = null){
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
var myCoche = new Coche1('renault');
console.log('el modelo del coche 1 es: '+ myCoche.getModelo());