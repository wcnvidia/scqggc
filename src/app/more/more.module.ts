import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {MoreComponent} from './more.component';
import {MoreRoutingModule} from './more.routes';


@NgModule(
  {
    imports:[CommonModule,MoreRoutingModule,],
    declarations:[MoreComponent],
  }
)
export class MoreModule {

}

