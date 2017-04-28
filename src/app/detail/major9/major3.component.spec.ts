import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Major1Component } from './major3.component';

describe('Major1Component', () => {
  let component: Major1Component;
  let fixture: ComponentFixture<Major1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Major1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Major1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
