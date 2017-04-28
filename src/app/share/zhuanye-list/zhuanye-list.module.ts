import { ZhuanyeListRoutingModule } from './zhuanye-list.routes';
import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {ZhuanyeListComponent} from './zhuanye-list.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule(
  {
    imports:[CommonModule,CollapseModule.forRoot(),ZhuanyeListRoutingModule],
    declarations:[ZhuanyeListComponent],
    exports:[ZhuanyeListComponent]
  }
)
export class ZhuanyeListModule {

}
