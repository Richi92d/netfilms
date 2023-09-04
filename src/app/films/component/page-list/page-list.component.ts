import { Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieListe } from '../../interfaces/movie-list';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit, OnDestroy {

  public data: MovieListe[];
  public unsubscribe: Subscription;

  constructor(private movieService: MovieListService) { }

  ngOnInit(): void {
    this.unsubscribe = this.movieService.getAllMovies().subscribe((res: MovieListe[]) => {
      console.log(this.data);
      this.data = res;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

}
