import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso3LaboresCientificasComponent } from './paso3-labores-cientificas.component';

describe('Paso3LaboresCientificasComponent', () => {
  let component: Paso3LaboresCientificasComponent;
  let fixture: ComponentFixture<Paso3LaboresCientificasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso3LaboresCientificasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paso3LaboresCientificasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
