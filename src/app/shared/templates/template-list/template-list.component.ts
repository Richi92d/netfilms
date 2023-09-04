import { Component, Input } from '@angular/core';
import { MovieListe } from 'src/app/films/interfaces/movie-list';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent {
  showFiller = false;
  @Input() public films: MovieListe[];

  constructor() {
    console.log(this.films);
  }

}
