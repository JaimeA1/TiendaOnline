import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidadoresService} from "../../services/validadores.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  forma!:FormGroup;

  noCondiciones:boolean=false;

  constructor(private formBuilder:FormBuilder, private validadores:ValidadoresService) {
    this.crearFormulario();
    this.cargarDatosFormulario()
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.forma = this.formBuilder.group({
      usuario : ['',[Validators.required, Validators.minLength(5)]],
      pass1:['', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]],
      pass2:['', [Validators.required, Validators.minLength(8),Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      nombre:['', [Validators.required, Validators.minLength(3)]],
      apellido:['', [Validators.required, Validators.minLength(3)]],
      telef:['', [Validators.required, Validators.pattern("[0-9]{9}")]],
      fechanac:['',[Validators.required]],
      tarjeta:['',[Validators.required, Validators.minLength(16),Validators.maxLength(19)]],
      direccion: this.formBuilder.group({
        direcc:['',[Validators.required, Validators.minLength(3)]],
        local:['',[Validators.required, Validators.minLength(3)]],
        prov:['',[Validators.required, Validators.minLength(3)]],
        cpost:['',[Validators.required, Validators.maxLength(5)]]
      }),
    }), {
      validators:this.validadores.passwordsIguales('pass1', 'pass2')
    }
  }

  guardar() {
    if (this.forma.invalid)
      this.recursivaGuardar(this.forma);
    console.log(this.forma.value);
  }

  recursivaGuardar(item: FormGroup): any{
    Object.values(item.controls).forEach(control => {
        if(control instanceof FormGroup) this.recursivaGuardar(control);
        control.markAsTouched();
      }
    );
    return;
  }

  cargarDatosFormulario() {
    this.forma.reset({
      usuario :"",
      pass1:"",
      pass2:"",
      email:"",
      nombre:"",
      apellido:"",
      telef:"",
      fechanac:"",
      tarjeta:"",
      direccion: {
        direcc:"",
        local:"",
        prov:"",
        cpost:"",
      }
    })
  }

  valido(texto:string){
    let elem:any = this.forma.get(texto);
    return !(elem.invalid && elem.touched)
  }

  get pass2Valido() {
    const pass1 = this.forma.get('pass1')!.value
    const pass2 = this.forma.get('pass2')!.value
    return (pass1 === pass2) ? true : false;
  }

  condiciones() {
    if((<HTMLInputElement>document.getElementsByName("condiciones")[0]).checked){
      this.noCondiciones=true
    }else{
      this.noCondiciones=false
    }
  }
}
