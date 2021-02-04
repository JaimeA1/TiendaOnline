import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductosComponent} from "./components/productos/productos.component";
import {ProductoComponent} from "./components/producto/producto.component";
import {FormsComponent} from "./components/forms/forms.component";
import {BuscadorComponent} from "./components/buscador/buscador.component";
import {PerfilComponent} from "./components/perfil/perfil.component";

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoComponent},
  { path: 'formulario', component: FormsComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'buscar/:name', component: BuscadorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
