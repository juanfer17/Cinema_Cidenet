import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IResponseGeneral } from '../share/generalResponse.model';
import { Observable } from 'rxjs/internal/Observable';


type EntityResponseGeneral = HttpResponse<IResponseGeneral>


@Injectable({
  providedIn: 'root'
})


export class RegisterService {

  constructor( private http : HttpClient){ }


  register(dataRegister: any): Observable<EntityResponseGeneral> {
    let headers = this.getHeaders();
    return this.http.post<IResponseGeneral>("http://localhost:8080/user/register",dataRegister,{observe: 'response', headers})
  }
  

  getHeaders():HttpHeaders{
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }


}
