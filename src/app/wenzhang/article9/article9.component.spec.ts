import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article9Component } from './article9.component';

describe('Article9Component', () => {
  let component: Article9Component;
  let fixture: ComponentFixture<Article9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
