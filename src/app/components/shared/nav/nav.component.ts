import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  forma!:FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder) {
    this.crearFormulario();
    this.cargarDatosFormulario()
  }

  ngOnInit(): void {
  }

  public buscarProducto(name:string){
    this.router.navigate(["/buscar", name])
  }

  crearFormulario() {
    this.forma = this.formBuilder.group({
      usuario : ['',[Validators.required, Validators.minLength(5)]],
      pass1:['', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]]
    })
  }

  guardar() {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control => {
        if (control instanceof FormGroup)
          Object.values(control.controls).forEach(control => control.markAsTouched());
        control.markAsTouched();
      })
      return;
    }
    console.log(this.forma);
  }

  cargarDatosFormulario() {
    this.forma.reset({
      usuario :"",
      pass1:"",
      email:"",
    })
  }

  valido(texto:string){
    let elem:any = this.forma.get(texto);
    return !(elem.invalid && elem.touched)
  }
}
