import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaConvertComponent } from './area-convert.component';

describe('AreaConvertComponent', () => {
  let component: AreaConvertComponent;
  let fixture: ComponentFixture<AreaConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
