import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthConvertComponent } from './length-convert.component';

describe('LengthConvertComponent', () => {
  let component: LengthConvertComponent;
  let fixture: ComponentFixture<LengthConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
