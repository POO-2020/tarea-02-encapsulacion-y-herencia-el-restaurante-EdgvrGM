const formatterDolar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

export default class Precio{

    

    constructor(valor)
    {
        this._valor = valor     
    }

    
    getPrecio(){
        
        return (`${formatterDolar.format(this._valor)}`)
    }

    getValor(){
        return this._valor
    }
}