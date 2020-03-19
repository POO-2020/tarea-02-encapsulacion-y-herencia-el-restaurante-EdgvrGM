import Cliente from "./cliente.js"
export default class ClienteFrecuente extends Cliente{

    constructor({nombre, direccion, telefono, numeroCliente, fechaRegistro})
    {
        super({nombre, direccion, telefono})
        this._numeroCliente = numeroCliente
        this._fechaRegistro = fechaRegistro
    }

    getPerfil()
    {
        return (`${this._numeroCliente}, ${this._fechaRegistro.getFecha()}, ${this._nombre}, ${this._direccion.getFormatoCorto()}, ${this._telefono}`)
    }
}