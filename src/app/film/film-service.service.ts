import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseGeneral } from '../share/generalResponse.model';
import { Observable } from 'rxjs/internal/Observable';

type EntityResponseGeneral = HttpResponse<IResponseGeneral>

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  constructor(private http : HttpClient) { }



  film(dataFilm : any):Observable<EntityResponseGeneral>{
    let headers = this.getHeaders();
    return this.http.post<IResponseGeneral>("http://localhost:8080/film/create", dataFilm, {observe : 'response' , headers});
  }

  getHeaders():HttpHeaders{
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

}
