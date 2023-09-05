import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieListe } from 'src/app/films/interfaces/movie-list';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent {
  @Input() public films: MovieListe[];
  @Input() public searchText: string;
  @Output() public favoris = new EventEmitter();

  public isFavoris: boolean = false;

  constructor(private snackBar: MatSnackBar) { }

  addFavoris(favoris: MovieListe) {
    this.isFavoris = !this.isFavoris;

    let isFavoriSelected = { ...favoris };
    isFavoriSelected.favoris = this.isFavoris;

    if (this.isFavoris) {
      this.snackBar.open('Ce film à bien été ajouté au favori', 'close');
    } else {
      this.snackBar.open('Ce film a bien été supprimé des favoris', 'close');
    }

    this.favoris.emit(isFavoriSelected);
  }

}
