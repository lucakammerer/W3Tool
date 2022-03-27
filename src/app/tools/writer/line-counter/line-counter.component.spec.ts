import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCounterComponent } from './line-counter.component';

describe('LineCounterComponent', () => {
  let component: LineCounterComponent;
  let fixture: ComponentFixture<LineCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
