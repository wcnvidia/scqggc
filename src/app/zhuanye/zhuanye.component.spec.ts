import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhuanyeComponent } from './zhuanye.component';

describe('ZhuanyeComponent', () => {
  let component: ZhuanyeComponent;
  let fixture: ComponentFixture<ZhuanyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhuanyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhuanyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
