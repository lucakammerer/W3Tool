import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexadecimalConvertComponent } from './hexadecimal-convert.component';

describe('HexadecimalConvertComponent', () => {
  let component: HexadecimalConvertComponent;
  let fixture: ComponentFixture<HexadecimalConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexadecimalConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexadecimalConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
