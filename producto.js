export default class Producto{
    constructor(nombre, precio){
        this._nombre = nombre
        this._precio = precio
    }

    getDescripcion(){
        return(`${this._nombre} ${this._precio.getPrecio()}`)
    }

    getPrecio(){
        return this._precio.getValor()
    }

    getNombre(){
        return this._nombre
    }
}