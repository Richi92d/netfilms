import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieListe } from 'src/app/films/interfaces/movie-list';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent {
  @Input() public films: MovieListe[];
  @Output() public favoris = new EventEmitter();

  public isFavoris: boolean = false;

  constructor(private snackBar: MatSnackBar) {}

  addFavoris(favoris: MovieListe) {
    this.isFavoris = !this.isFavoris;

    let t = { ...favoris };
    t.favoris = this.isFavoris;

    this.favoris.emit(t);
    this.snackBar.open('Ajouté au favoris', 'close');
  }

}
