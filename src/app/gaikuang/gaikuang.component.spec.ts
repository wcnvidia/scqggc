import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaikuangComponent } from './gaikuang.component';

describe('GaikuangComponent', () => {
  let component: GaikuangComponent;
  let fixture: ComponentFixture<GaikuangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaikuangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaikuangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
