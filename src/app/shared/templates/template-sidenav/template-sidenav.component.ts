import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-sidenav',
  templateUrl: './template-sidenav.component.html',
  styleUrls: ['./template-sidenav.component.scss']
})
export class TemplateSidenavComponent {
  public showFiller = false;

  constructor(private router: Router) { }

  goToAccueil() {
    this.router.navigate(['/films/liste']);
  }

  goToFavoris() {
    this.router.navigate(['/films/favoris']);
  }

}
