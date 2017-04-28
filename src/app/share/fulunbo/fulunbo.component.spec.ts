import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulunboComponent } from './fulunbo.component';

describe('FulunboComponent', () => {
  let component: FulunboComponent;
  let fixture: ComponentFixture<FulunboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulunboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulunboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
