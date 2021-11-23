import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IResponseAuth } from '../share/responseAuth.model';
import { Observable } from 'rxjs';

type EntityResponseLogin = HttpResponse<IResponseAuth>;

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http : HttpClient) { }

  login(dataLogin: any):Observable<EntityResponseLogin>{
    return this.http.post<IResponseAuth>('http://localhost:8080/security/authentication', dataLogin, {observe:'response'});
  }
}
