import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSidenavComponent } from './template-sidenav.component';

describe('TemplateSidenavComponent', () => {
  let component: TemplateSidenavComponent;
  let fixture: ComponentFixture<TemplateSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateSidenavComponent]
    });
    fixture = TestBed.createComponent(TemplateSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
