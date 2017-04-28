import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {ZhaoshengComponent} from './zhaosheng.component';
import {ZhaoshengRoutingModule} from './zhaosheng.routes';


@NgModule(
  {
    imports:[CommonModule,ZhaoshengRoutingModule,],
    declarations:[ZhaoshengComponent],
  }
)
export class ZhaoshengModule {

}

