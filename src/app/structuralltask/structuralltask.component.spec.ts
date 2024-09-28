import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralltaskComponent } from './structuralltask.component';

describe('StructuralltaskComponent', () => {
  let component: StructuralltaskComponent;
  let fixture: ComponentFixture<StructuralltaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructuralltaskComponent]
    });
    fixture = TestBed.createComponent(StructuralltaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
