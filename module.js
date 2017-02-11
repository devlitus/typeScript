/**
 * Created by Carles on 11/02/2017.
 */
/*
* creacion de module siever para exportar e inportar clases
* en cada module puedes implementar tantas clases como quieras
*/
var Tienda;
(function (Tienda) {
    var Ropa = (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert('Tienda de tecnologia: ' + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var Ropa = Tienda.Ropa;
var cargar_informatica = new Informatica('supertienda');
var cargar_ropa = new Ropa('tienda de ropa');
//# sourceMappingURL=module.js.map