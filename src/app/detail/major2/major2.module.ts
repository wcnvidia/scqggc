import { Major2RoutingModule } from './major2.routes';

import { Major2Component } from './major2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule(
  {
    imports: [CommonModule,Major2RoutingModule ],
    declarations: [Major2Component],
  }
)
export class Major2Module {

}
