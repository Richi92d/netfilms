import { Component, OnDestroy, OnInit } from '@angular/core';
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
    this.getMovies();
  }

  getMovies() {
    this.unsubscribe = this.movieService.getAllMovies().subscribe((res: MovieListe[]) => {
      this.data = res;
    });
  }

  addFavMovie(favoris: MovieListe) {
    this.unsubscribe = this.movieService.addFavoris(favoris).subscribe((res: any) => {
      this.getMovies();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

}
