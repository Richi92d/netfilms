import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFavorisComponent } from './page-favoris.component';

describe('PageFavorisComponent', () => {
  let component: PageFavorisComponent;
  let fixture: ComponentFixture<PageFavorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFavorisComponent]
    });
    fixture = TestBed.createComponent(PageFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
