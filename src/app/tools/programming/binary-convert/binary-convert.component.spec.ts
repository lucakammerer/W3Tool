import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryConvertComponent } from './binary-convert.component';

describe('BinaryConvertComponent', () => {
  let component: BinaryConvertComponent;
  let fixture: ComponentFixture<BinaryConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
