import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  login: FormGroup;

  
  constructor(private  fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router) {
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

    console.log(user);
    console.log(password);
    
    if(user ==='jjaraalz' && password==="admin123"){
      this.router.navigate(['dashboard'])
    }else{
      // Error
      this.error();
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
