import {Component, OnInit} from '@angular/core';
import {Producto, ProductosService} from "../../services/productos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  productosEncontrados!:Producto[];
  textoBuscado!:string;

  constructor(private _productosService:ProductosService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros =>{
      this.productosEncontrados=this._productosService.buscarProducto(parametros["name"]);
      this.textoBuscado=parametros["name"];
      console.log(this.productosEncontrados);
    })
  }
}
