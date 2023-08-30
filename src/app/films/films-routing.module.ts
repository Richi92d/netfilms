import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFilmComponent } from './component/page-film/page-film.component';
import { PageListComponent } from './component/page-list/page-list.component';

const routes: Routes = [
  {
    path: '', component: PageFilmComponent,
    children: [
      {
        path: 'Liste', component: PageListComponent
      },
      {
        path: '', redirectTo: 'Liste', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
