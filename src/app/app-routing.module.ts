import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/film.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path : '' , redirectTo: 'login', pathMatch: 'full'},
  {path : 'login' , component:LoginComponent},
  {path : 'register' , component:RegisterComponent},
  {path : 'film' , component:FilmComponent},
  {path : 'dashboard' , component:DashboardComponent},
  {path : '**' , redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


