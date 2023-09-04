import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFavorisComponent } from './component/page-favoris/page-favoris.component';
import { PageFilmComponent } from './component/page-film/page-film.component';
import { PageListComponent } from './component/page-list/page-list.component';

const routes: Routes = [
  {
    path: '', component: PageFilmComponent,
    children: [
      {
        path: 'liste', component: PageListComponent
      },
      {
        path: '', redirectTo: 'liste', pathMatch: 'full'
      },
      {
        path: 'favoris', component: PageFavorisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
