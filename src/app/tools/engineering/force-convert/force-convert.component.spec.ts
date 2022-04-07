import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceConvertComponent } from './force-convert.component';

describe('ForceConvertComponent', () => {
  let component: ForceConvertComponent;
  let fixture: ComponentFixture<ForceConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
