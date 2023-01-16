import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteCategorieComponent } from './ajoute-categorie.component';

describe('AjouteCategorieComponent', () => {
  let component: AjouteCategorieComponent;
  let fixture: ComponentFixture<AjouteCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
