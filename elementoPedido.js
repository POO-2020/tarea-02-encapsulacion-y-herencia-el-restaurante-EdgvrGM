import Precio from "./precio.js";
export default class ElementoPedido{

    constructor(producto, cantidad)
    {
        this._producto = producto
        this._cantidad = cantidad
    }

    getDescripcion(){
        let total = (this._cantidad * this._producto.getPrecio())
        total = new Precio (total)
        return(`${this._cantidad} X ${this._producto.getNombre()} ${total.getPrecio()}`)
    }

    getPrecio(){
        return this._producto.getPrecio()
    }
    getCantidad(){
        return this._cantidad
    }
}