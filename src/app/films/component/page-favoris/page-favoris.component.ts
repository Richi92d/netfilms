import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieListe } from '../../interfaces/movie-list';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-page-favoris',
  templateUrl: './page-favoris.component.html',
  styleUrls: ['./page-favoris.component.scss']
})
export class PageFavorisComponent implements OnInit, OnDestroy {

  public data: MovieListe[] = [];
  public unsubscribe: Subscription;

  constructor(private movieService: MovieListService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.unsubscribe = this.movieService.getAllMovies().subscribe((res: MovieListe[]) => {
      let t = res.map((x) => {
        if (x.favoris == true) {
          this.data.push(x);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

}