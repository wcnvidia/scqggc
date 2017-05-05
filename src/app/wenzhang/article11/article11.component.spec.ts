import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article11Component } from './article11.component';

describe('Article11Component', () => {
  let component: Article11Component;
  let fixture: ComponentFixture<Article11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
