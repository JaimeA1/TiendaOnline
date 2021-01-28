import {Component, Input, OnInit} from '@angular/core';
import {Producto, ProductosService} from "../../services/productos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos!:Producto[];

  constructor(private _productosService:ProductosService){

  }

  ngOnInit(): void {
    this.productos = this._productosService.getProductos();
  }
}
