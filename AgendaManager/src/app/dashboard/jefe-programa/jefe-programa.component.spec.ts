import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefeProgramaComponent } from './jefe-programa.component';

describe('JefeProgramaComponent', () => {
  let component: JefeProgramaComponent;
  let fixture: ComponentFixture<JefeProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JefeProgramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JefeProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
