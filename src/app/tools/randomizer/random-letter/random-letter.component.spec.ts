import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomLetterComponent } from './random-letter.component';

describe('RandomLetterComponent', () => {
  let component: RandomLetterComponent;
  let fixture: ComponentFixture<RandomLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
