export default class Direccion{
    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio)
    {
        this._calle = calle
        this._numeroExterior = numeroExterior
        this._numeroInterior = numeroInterior
        this._colonia = colonia
        this._codigoPostal = codigoPostal
        this._ciudad = ciudad
        this._municipio = municipio
    }

    getFormatoCorto()
    {
        return (`${this._calle} ${this._numeroExterior}`)
    }

    getFormatoExtendido()
    {
        return(`${this._ciudad}, ${this._municipio}, ${this._colonia}, ${this._calle}, Numero exterior: ${this._numeroExterior}, Numero interior: ${this._numeroInterior}, Codigo Postal: ${this._codigoPostal}`)
    }
}