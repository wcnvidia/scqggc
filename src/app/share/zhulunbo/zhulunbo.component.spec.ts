import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhulunboComponent } from './zhulunbo.component';

describe('ZhulunboComponent', () => {
  let component: ZhulunboComponent;
  let fixture: ComponentFixture<ZhulunboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhulunboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhulunboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
