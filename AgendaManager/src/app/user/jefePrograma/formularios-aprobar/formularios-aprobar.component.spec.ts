import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosAprobarComponent } from './formularios-aprobar.component';

describe('FormulariosAprobarComponent', () => {
  let component: FormulariosAprobarComponent;
  let fixture: ComponentFixture<FormulariosAprobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosAprobarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosAprobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
