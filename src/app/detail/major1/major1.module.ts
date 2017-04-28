import { Major1RoutingModule } from './major1.routes';
import { Major1Component } from './major1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule(
  {
    imports: [CommonModule,Major1RoutingModule ],
    declarations: [Major1Component],
  }
)
export class Major1Module {

}