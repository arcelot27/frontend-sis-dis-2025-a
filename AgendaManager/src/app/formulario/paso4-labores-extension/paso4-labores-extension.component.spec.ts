import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso4LaboresExtensionComponent } from './paso4-labores-extension.component';

describe('Paso4LaboresExtensionComponent', () => {
  let component: Paso4LaboresExtensionComponent;
  let fixture: ComponentFixture<Paso4LaboresExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso4LaboresExtensionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paso4LaboresExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
