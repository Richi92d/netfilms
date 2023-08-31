import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateHomeComponent } from './templates/template-home/template-home.component';

@NgModule({
  declarations: [
    TemplateHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateHomeComponent
  ]
})
export class SharedModule { }
