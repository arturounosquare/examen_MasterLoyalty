import { Component, OnInit } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PrimeNgModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  AuthForm: FormGroup = this.formBuilder.group({
    email: ['', [ Validators.required, Validators.email ] ],
    AuthPassInit: ['', [ Validators.required ]  ]
  });

  get emailErrorMsg(): string {  
    const errors = this.AuthForm.get('email')?.errors;
    if ( errors?.['required'] ) {
      return 'El campo usuario es requerido';
    } 
    if ( errors?.['email'] ) {
      return 'El valor ingresado no tiene formato de correo electrónico';
    } 
    return '';
  }

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private securityService: SecurityService) { }

  ngOnInit(): void {
    // this.AuthForm.reset({
    //   email: 'test1@test.com',
    //   passUserTracker: 'fernando_her85'
    // })
  }

  campoNoValido( campo: string ) {
    return this.AuthForm.get(campo)?.invalid
            && this.AuthForm.get(campo)?.touched;
  }

  sendAuthentication(): void{
    this.AuthForm.markAllAsTouched();
    if(this.AuthForm.valid){
     if(this.securityService.login(this.AuthForm.value)){
      this.router.navigate(["/shopping"]); 
     }
     else{
      Swal.fire(
        'Inicio de sesión',
        'El usuario y/o la contraseña es incorrecto',
        'error'
      );
     }
    }
  }
}
