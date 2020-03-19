import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedido from "./elementoPedido.js";
import Direcion from "./direccion.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Restaurante from "./restaurante.js";
import ClienteFrecuente from "./clienteF.js";

class Main {
  constructor() {
    this.precio = new Precio(75.2);
    this.producto = new Producto("Liru sisa Basic", this.precio);
    this.producto2 = new Producto("Choripanes", new Precio(20.5));
    this.elementoPedido = new ElementoPedido(this.producto, 2);
    this.elementoPedido2 = new ElementoPedido(this.producto2, 1);
    this.direccion = new Direcion(
      "Miguel",
      524,
      12,
      "Madrid",
      255781,
      "Tecoman",
      "Colima"
    );
    this.cliente = new Cliente("Doctor Chapatin", this.direccion, 3125486691);
    this.cliente2 = new Cliente("Valentin Oliva", this.direccion, 3129736654);

    let datoRestaurante = {
      nombre: "Liru sisa",
      telefono: 3136554275,
      direccion: this.direccion
    };

    let datosPedido = {
      fecha: new Fecha(new Date(2019, 3, 15)),
      hora: new Tiempo(11, 23, "am"),
      cliente: this.cliente,
      numeroPedido: 775
    };

    let datosPedido2 = {
      fecha: new Fecha(new Date(2017, 2, 13)),
      hora: new Tiempo(5, 50, "pm"),
      cliente: this.cliente2,
      numeroPedido: 223
    };

    let datosClienteFrecuente = {
      nombre: "Enrique Segoviano",
      direccion: new Direcion(
        "Tecolapa",
        220,
        7,
        "Mina",
        244876,
        "Dubai",
        "Colima"
      ),
      telefono: 3135234294,
      numeroCliente: 44587,
      fecha: new Fecha(new Date(2014, 2, 24))
    };

    this.pedido = new Pedido(datosPedido);
    this.pedido2 = new Pedido(datosPedido2);

    this.clienteFrecuente = new ClienteFrecuente(datosClienteFrecuente);

    this.restaurante = new Restaurante(datoRestaurante);

    this.pedido.agregarElemento(this.elementoPedido);
    this.pedido.agregarElemento(this.elementoPedido2);
    this.pedido.agregarElemento(this.elementoPedido2);
  }

  testElementoProducto() {
    console.log(this.elementoPedido.getDescripcion());
  }

  testDireccion() {
    console.log(this.direccion.getFormatoExtendido());
    console.log(this.direccion.getFormatoCorto());
  }

  testCliente() {
    console.log(this.cliente.getPerfil());
  }

  testPedido() {
    console.log(this.pedido.getResumen());
    console.log(this.pedido.getNumeroElementos());
    console.log(this.pedido.getProductos());
    console.log(this.pedido.getCostoTotal());
    this.pedido.listarElementos();
  }

  testRestaurante() {
    this.restaurante.registrarProducto(this.producto);
    this.restaurante.registrarProducto(this.producto2);

    //test "no registro el mismo pedido 2 veces"
    console.log(this.restaurante.registrarPedido(this.pedido));
    console.log(this.restaurante.registrarPedido(this.pedido));

    //test "elimino el pedido exitosamente"
    console.log(this.restaurante.eliminarPedido(this.pedido));

    //test "no encuentro el pedido y regreso false"
    console.log(this.restaurante.eliminarPedido(this.pedido));

    //test "despues de eliminarlo agrego otro pedido"
    console.log(this.restaurante.registrarPedido(this.pedido));

    //test "modificar pedido"
    console.log(this.restaurante.modificarPedido(this.pedido, this.pedido2));

    this.restaurante.listarProductos();
    this.restaurante.listarPedidos();
  }
}

let tester = new Main();
tester.testElementoProducto();
tester.testDireccion();
tester.testCliente();
tester.testPedido();
tester.testRestaurante();
