import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListe } from '../interfaces/movie-list';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<MovieListe> {
    return this.http.get<MovieListe>('http://localhost:3000/movies');
  }
}
