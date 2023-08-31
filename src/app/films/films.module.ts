import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { PageListComponent } from './component/page-list/page-list.component';
import { PageFilmComponent } from './component/page-film/page-film.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageListComponent,
    PageFilmComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule
  ]
})
export class FilmsModule { }
