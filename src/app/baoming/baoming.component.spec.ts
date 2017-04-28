import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaomingComponent } from './baoming.component';

describe('BaomingComponent', () => {
  let component: BaomingComponent;
  let fixture: ComponentFixture<BaomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
