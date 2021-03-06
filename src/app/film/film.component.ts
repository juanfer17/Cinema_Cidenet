import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FilmService } from './film-service.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  filmForm = this.fb.group({
    title: [null, Validators.required],
    genreFilm:[null, Validators.required],
    urlImage:[null, Validators.required],
    duracion:[null, Validators.required],
    activa: [null],
    fechaFin: [null]
  });

  constructor( private fb:FormBuilder, private serviceFilm: FilmService) { }

  ngOnInit(): void {
  }

  film(){
    let dataFilm={
      title: this.filmForm.get(['title'])!.value,
      genreFilm:this.filmForm.get(['genreFilm'])!.value,
      urlImage:this.filmForm.get(['urlImage'])!.value,
      duracion:this.filmForm.get(['duracion'])!.value,
      activa: this.filmForm.get(['activa'])!.value,
      fechaFin: this.filmForm.get(['fechaFin'])!.value
    };
    
    
    let dataRespuesta:any;
    this.serviceFilm.film(dataFilm).subscribe(response =>{
      dataRespuesta = response;
      if(dataRespuesta['status'] === '00'){
       console.log('Creacion de pelicula exitoso')
      }else if(dataRespuesta['status'] !== '00'){
        console.log('Creacion de pelicula fallido')
      }
    });
  }

}
