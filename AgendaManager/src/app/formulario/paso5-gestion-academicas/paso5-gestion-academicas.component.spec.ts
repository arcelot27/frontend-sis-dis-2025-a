import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso5GestionAcademicasComponent } from './paso5-gestion-academicas.component';

describe('Paso5GestionAcademicasComponent', () => {
  let component: Paso5GestionAcademicasComponent;
  let fixture: ComponentFixture<Paso5GestionAcademicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso5GestionAcademicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paso5GestionAcademicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
