import { Major2RoutingModule } from './major3.routes';

import { Major2Component } from './major3.component';
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
