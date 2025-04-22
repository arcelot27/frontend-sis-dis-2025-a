import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosDevueltosComponent } from './formularios-devueltos.component';

describe('FormulariosDevueltosComponent', () => {
  let component: FormulariosDevueltosComponent;
  let fixture: ComponentFixture<FormulariosDevueltosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosDevueltosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosDevueltosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
