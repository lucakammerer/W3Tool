import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerConvertComponent } from './power-convert.component';

describe('PowerConvertComponent', () => {
  let component: PowerConvertComponent;
  let fixture: ComponentFixture<PowerConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
