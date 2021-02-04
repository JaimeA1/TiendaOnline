import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  modificar:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  modificarDatos() {
    if((<HTMLInputElement>document.getElementsByName("modif")[0])){
      this.modificar=true;
      (<HTMLInputElement>document.getElementsByName("guardar")[0]).style.visibility="visible";
    }
  }

  guardarDatos() {
    if((<HTMLInputElement>document.getElementsByName("guardar")[0])){
      this.modificar=false;
      (<HTMLInputElement>document.getElementsByName("guardar")[0]).style.visibility="hidden";
    }
  }

}
