import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {ProductosService} from "./services/productos.service";
import { ProductoComponent } from './components/producto/producto.component';
import {CarouselModule} from "ng-uikit-pro-standard";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductosComponent,
    FooterComponent,
    ProductoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
    ],
  providers: [ProductosService],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
