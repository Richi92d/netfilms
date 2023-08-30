import { Component, Directive, OnInit } from '@angular/core';
import { MovieListe } from '../../interfaces/movie-list';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  constructor(private movieService: MovieListService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((res: MovieListe) => {
      console.log(res);
    });
  }

}
