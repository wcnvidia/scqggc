import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemenComponent } from './remen.component';

describe('RemenComponent', () => {
  let component: RemenComponent;
  let fixture: ComponentFixture<RemenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
