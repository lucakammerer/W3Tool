import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsMinifierComponent } from './js-minifier.component';

describe('JsMinifierComponent', () => {
  let component: JsMinifierComponent;
  let fixture: ComponentFixture<JsMinifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsMinifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsMinifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
