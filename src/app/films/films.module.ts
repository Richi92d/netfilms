import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { PageListComponent } from './component/page-list/page-list.component';
import { PageFilmComponent } from './component/page-film/page-film.component';
import { SharedModule } from '../shared/shared.module';
import { PageFavorisComponent } from './component/page-favoris/page-favoris.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageListComponent,
    PageFilmComponent,
    PageFavorisComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class FilmsModule { }
