import { AdRoutingModule } from './ad.routes';
import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {AdComponent} from './ad.component';


@NgModule(
  {
    imports:[CommonModule,AdRoutingModule],
    declarations:[AdComponent],
    exports:[AdComponent]
  }
)
export class AdModule {

}
