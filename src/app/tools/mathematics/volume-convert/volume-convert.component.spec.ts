import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeConvertComponent } from './volume-convert.component';

describe('VolumeConvertComponent', () => {
  let component: VolumeConvertComponent;
  let fixture: ComponentFixture<VolumeConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
