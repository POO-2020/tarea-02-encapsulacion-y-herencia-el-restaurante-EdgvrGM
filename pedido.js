import Precio from "./precio.js";

export default class Pedido {


    constructor({fecha, hora, cliente, numeroPedido}) {
        this._fecha = fecha;
        this._hora = hora;
        this._cliente = cliente;
        this._numeroPedido = numeroPedido;
        this._elementosPedidos = [];
    }
    agregarElemento(elemento) {
        this._elementosPedidos.push(elemento);
    }
    listarElementos() {
        console.log("~ E L E M E N T O S ~");
        this._elementosPedidos.forEach((elem, i) => {
            console.log(`(${i + 1}) ~ ~ ~ ${elem.getDescripcion()}`);
        });
    }
    getCostoTotal() {
        let total = 0
        this._elementosPedidos.forEach((elem) => {
            total = (total + (elem.getPrecio() * elem.getCantidad()));
        });
        total = new Precio(total);
        return total.getPrecio();
    }
    getProductos() {
        let productos = 0;
        this._elementosPedidos.forEach((elem) => {
            productos = productos + elem.getCantidad();
        });
        return productos;
    }
    getNumeroElementos() {
        let numeroDeElementos = this._elementosPedidos.length;
        return numeroDeElementos;
    }

    getResumen() {
        return `${this._fecha.getFecha()} ${this._hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getProductos()} productos - total ${this.getCostoTotal()}`;
    }

    getNumeroPedido(){
        return this._numeroPedido
    }

    _esIgualA(pedido){
        if(pedido.getNumeroPedido() == this._numeroPedido){ return true}
        else {return false}
    }
}