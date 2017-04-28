import { Major1Component } from './major1.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const Major1Routes: Routes = [
  {
    path: '',
    component: Major1Component,
  },
];
const Major1Routing = RouterModule.forChild(Major1Routes)
@NgModule({
  imports: [Major1Routing],
  exports: [RouterModule]
})
export class Major1RoutingModule { }