import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnetConvertComponent } from './magnet-convert.component';

describe('MagnetConvertComponent', () => {
  let component: MagnetConvertComponent;
  let fixture: ComponentFixture<MagnetConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagnetConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagnetConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
