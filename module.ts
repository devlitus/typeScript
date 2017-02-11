/**
 * Created by Carles on 11/02/2017.
 */
/*
* creacion de module siever para exportar e inportar clases
* en cada module puedes implementar tantas clases como quieras
*/
module Tienda{
    export class Ropa{
        constructor(public titulo: string){
            alert(titulo);
        }
    }
    export class Informatica{
        constructor(public titulo: string){
            alert('Tienda de tecnologia: ' + titulo);
        }
    }
}
import Informatica = Tienda.Informatica;
import Ropa = Tienda.Ropa;
let cargar_informatica = new Informatica('supertienda');
let cargar_ropa = new Ropa('tienda de ropa');
