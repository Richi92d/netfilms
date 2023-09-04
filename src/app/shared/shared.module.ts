import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateListComponent } from './templates/template-list/template-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TemplateSidenavComponent } from './templates/template-sidenav/template-sidenav.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    TemplateListComponent,
    TemplateSidenavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    TemplateListComponent,
    TemplateSidenavComponent
  ]
})
export class SharedModule { }
