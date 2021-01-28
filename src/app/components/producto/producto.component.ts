import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Producto, ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto!:Producto;

  constructor(private activatedRoute: ActivatedRoute, private _productosService:ProductosService, private router:Router) {
    this.activatedRoute.params.subscribe(parametros => {
      this.producto = this._productosService.getProducto(parametros['id']);
    })
  }

  ngOnInit(): void {
  }

  verProductos(){
    this.router.navigate(['/productos']);
  }

}
