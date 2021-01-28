import { Injectable } from '@angular/core';

export interface Producto{
  id?:number,
  nombre:string,
  imagen:string,
  precio:number,
  descr:string,
  consumPref:number,
  cantidad?:number
}

@Injectable()
export class ProductosService {
  constructor() {
    console.log('Servicio listo para usarse');
  }

  private productos: Producto[] = [
    {
      nombre: "Mermelada de Merlocotón",
      imagen: "assets/img/melocoton.png",
      precio: 9.5,
      descr: "La mermelada artesana de melocotón con melocotones de Calanda. Es perfecta para acompañar" +
        " los desayunos, postres y yogures.\n" + "\n" + "Sabores tradicionales, pero con toques especiales.",
      consumPref: 45,
      cantidad:500
    },
    {
      nombre: "Mermelada de Fresa",
      imagen: "assets/img/fresa.png",
      precio: 8,
      descr: "La mermelada artesana de fresa es ideal para daros un capricho y disfrutarla en un desayuno slow," +
        " acompañar carnes, dar un toque especial a los postres, queso fresco o yogur.\n" + "\n" +
        "Está hecha con mucho mimo para que la disfrutéis de manera muy especial en vuestras mesas.",
      consumPref: 50,
      cantidad:500
    },
    {
      nombre: "Mermelada de Tomate",
      imagen: "assets/img/tomate.png",
      precio: 7,
      descr: "La mermelada artesana de tomate es una mermelada perfecta para acompañar quesos semicurados" +
        " y curados, patés, carnes, pescados, o para elaborar salsas y aliños de ensalada.\n" + "\n" +
        "Tiene toda la esencia del tomate.",
      consumPref: 60,
      cantidad:500
    },
    {
      nombre: "Mermelada de Frambuesa",
      imagen: "assets/img/frambuesa.png",
      precio: 8.5,
      descr: "La mermelada artesana de frambuesa es ideal para daros un capricho y disfrutarla en un desayuno slow " +
        "o dar un toque especial a los postres o yogur.\n" + "\n" +
        "Está hecha con mucho mimo para que la disfrutéis de manera muy especial en vuestras mesas.",
      consumPref: 50,
      cantidad:500
    },
    {
      nombre: "Mermelada de Zarzamora",
      imagen: "assets/img/zarzamora.png",
      precio: 9.5,
      descr: "La mermelada artesana de zarzamora es ideal para daros un capricho y disfrutarla en un desayuno slow " +
        "o dar un toque especial a los postres o yogur.\n" + "\n" +
        "Está hecha con mucho mimo para que la disfrutéis de manera muy especial en vuestras mesas.",
      consumPref: 50,
      cantidad:500
    },
    {
      nombre: "Mermelada de Mandarina",
      imagen: "assets/img/mandarina.png",
      precio: 7,
      descr: "La mermelada artesana extra de mandarina es una mermelada perfecta para los que os apasione" +
        " esta fruta y os guste acompañar vuestros postres, yogures, carnes, desayunos con ese sabor intenso a mandarina.",
      consumPref: 50,
      cantidad:500
    },
    {
      nombre: "Mermelada de Zanahoria",
      imagen: "assets/img/zanahoria.png",
      precio: 7.5,
      descr: "La mermelada artesana de zanahoria es perfecta para acompañar" +
        " los desayunos, postres y yogures.\n" + "\n" + "Sabores tradicionales, pero con toques especiales.",
      consumPref: 45,
      cantidad:500
    },
    {
      nombre: "Mermelada de Piña",
      imagen: "assets/img/pina.png",
      precio: 9.5,
      descr: "La mermelada artesana de pina es perfecta para acompañar" +
        " los desayunos, postres y yogures.\n" + "\n" + "Sabores frescos, pero con toques especiales.",
      consumPref: 30,
      cantidad:500
    },
    {
      nombre: "Mermelada de Uva",
      imagen: "assets/img/uva.png",
      precio: 8,
      descr: "La mermelada artesana de uva es ideal para daros un capricho y disfrutarla en un desayuno slow " +
        "o dar un toque especial a los postres o yogur.\n" + "\n" +
        "Está hecha con mucho mimo para que la disfrutéis de manera muy especial en vuestras mesas.",
      consumPref: 40,
      cantidad:500
    }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProducto(id: number): Producto {
    return this.productos[id];
  }

  public buscarProducto(name:string):Producto[] {
    let productosEncontrados: Producto[] = [];
    for (let i=0;i<this.productos.length;i++) {
      let producto=this.productos[i];
      let nombre = producto.nombre.toLowerCase();
      if (nombre.indexOf(name) >= 0) {
        producto.id = i;
        productosEncontrados.push(producto)
      }
    }
    return productosEncontrados;
  }

}
