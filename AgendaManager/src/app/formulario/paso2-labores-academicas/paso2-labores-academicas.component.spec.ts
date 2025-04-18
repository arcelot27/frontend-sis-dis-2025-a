import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso2LaboresAcademicasComponent } from './paso2-labores-academicas.component';

describe('Paso2LaboresAcademicasComponent', () => {
  let component: Paso2LaboresAcademicasComponent;
  let fixture: ComponentFixture<Paso2LaboresAcademicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso2LaboresAcademicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paso2LaboresAcademicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
