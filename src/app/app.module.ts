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
import { FormsComponent } from './components/forms/forms.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductosComponent,
    FooterComponent,
    ProductoComponent,
    FormsComponent,
    BuscadorComponent,
    ProductoTarjetaComponent,
    PerfilComponent
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
