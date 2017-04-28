import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhuanyeListComponent } from './zhuanye-list.component';

describe('ZhuanyeListComponent', () => {
  let component: ZhuanyeListComponent;
  let fixture: ComponentFixture<ZhuanyeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhuanyeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhuanyeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
