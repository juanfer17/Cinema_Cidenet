import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  login: FormGroup;

  
  constructor(private  fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router, private loginService: LoginServiceService) {
    this.login = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
   }


  ngOnInit(): void {
  }



  ingresar(){
    
    const user = this.login.value.user;
    const password = this.login.value.password;

    const dataLogin = {
      email: user,
      password: password
    }

    this.loginService.login(dataLogin).subscribe(response =>{
      if(response.status === 200){
        localStorage.setItem('token',response.body?.token+'');
        let token = response.body?.token;
        this.router.navigate(['dashboard']);

      }else{
        this.error();
      }
    });
  }
    error(){
      this._snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }


}
