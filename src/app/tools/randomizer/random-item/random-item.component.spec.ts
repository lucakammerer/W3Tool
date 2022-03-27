import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomItemComponent } from './random-item.component';

describe('RandomItemComponent', () => {
  let component: RandomItemComponent;
  let fixture: ComponentFixture<RandomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
