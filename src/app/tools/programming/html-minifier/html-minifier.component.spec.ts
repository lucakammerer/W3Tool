import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlMinifierComponent } from './html-minifier.component';

describe('HtmlMinifierComponent', () => {
  let component: HtmlMinifierComponent;
  let fixture: ComponentFixture<HtmlMinifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlMinifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlMinifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
