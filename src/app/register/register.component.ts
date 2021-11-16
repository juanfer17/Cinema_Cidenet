import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    docType: [null, [Validators.required]],
    docNum: [null, [Validators.required]],
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    email: [null, [Validators.required]],
    password: [null, [Validators.required]]

  });

  constructor(private fb: FormBuilder, private serviceRegister: RegisterService, protected router: Router) { }

  ngOnInit(): void {
  }

  register(){
    let dataRegister= {
      documentType: this.registerForm.get(['docType'])!.value,
      documentNumber:this.registerForm.get(['docNum'])!.value,
      firstName:this.registerForm.get(['firstName'])!.value,
      lastName:this.registerForm.get(['lastName'])!.value,
      email:this.registerForm.get(['email'])!.value,
      password:this.registerForm.get(['password'])!.value
    };
    
    this.serviceRegister.register(dataRegister).subscribe(response =>{
      if(response.body?.status==='00'){
        alert('Registro exitoso')
        this.router.navigate(['login']);
      }else{
        alert('Error al registrar')
      }
    });
  }
}