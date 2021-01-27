import { Component, OnInit } from '@angular/core';
import {Producto, ProductosService} from "../../services/productos.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos!:Producto[];

  constructor(private _productosService:ProductosService, private router:Router){

  }

  ngOnInit(): void {
    this.productos = this._productosService.getProductos();
  }

  verProducto(id:number){
    this.router.navigate(['/producto', id]);
  }
}
