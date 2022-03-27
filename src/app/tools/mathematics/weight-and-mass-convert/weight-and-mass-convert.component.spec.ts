import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightAndMassConvertComponent } from './weight-and-mass-convert.component';

describe('WeightAndMassConvertComponent', () => {
  let component: WeightAndMassConvertComponent;
  let fixture: ComponentFixture<WeightAndMassConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightAndMassConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightAndMassConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
