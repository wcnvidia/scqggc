import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article10Component } from './article10.component';

describe('Article10Component', () => {
  let component: Article10Component;
  let fixture: ComponentFixture<Article10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
