export default class Restaurante{

    constructor(nombre, telefono, direccion)
    {
        this._nombre = nombre
        this._telefono = telefono
        this._direccion = direccion
        this._productos = []
        this._pedidos = []
    }

    registrarProducto(producto){
        this._productos.push(producto)
    }
    registrarPedido(pedido){
       
       let found = this.buscarPedido(pedido)
      
        if(found == null){this._pedidos.push(pedido)
            return true}
        else
        {return false}

        
    }

    listarProductos(){
        console.log("~ P R O D U C T O S ~")
        this._productos.forEach( (pro) => {
            console.log(pro.getDescripcion())
        })
    }
    listarPedidos(){
        console.log("~ P E D I D O S ~")
        this._pedidos.forEach( (ped, i) => {
            console.log(`(${i+1}) ~ ${ped.getResumen()}`)
        })
    }
    
    buscarPedido(pedido){
        let buscar = this._pedidos.find(ped => ped._esIgualA(pedido))
        if(buscar == undefined){return null}
        else {return buscar}
    }
    eliminarPedido(pedido){
        let found =  this.buscarPedido(pedido)
        if(found == null) return false
        else {
        let i = this._pedidos.indexOf(found)
        this._pedidos.splice(i,1)
        return true
        }
    }
    modificarPedido(pedido, nuevoPedido){
        let found =  this.buscarPedido(pedido)
        if(found == null) return false
        else {
        let i = this._pedidos.indexOf(found)
        this._pedidos[i] = nuevoPedido
        return true
        }
    }
}