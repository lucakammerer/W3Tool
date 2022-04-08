import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextReverseComponent } from './text-reverse.component';

describe('TextReverseComponent', () => {
  let component: TextReverseComponent;
  let fixture: ComponentFixture<TextReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextReverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
