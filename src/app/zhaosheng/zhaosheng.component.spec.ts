import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhaoshengComponent } from './zhaosheng.component';

describe('ZhaoshengComponent', () => {
  let component: ZhaoshengComponent;
  let fixture: ComponentFixture<ZhaoshengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhaoshengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhaoshengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
