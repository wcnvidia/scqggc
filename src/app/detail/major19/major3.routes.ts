import { Major2Component } from './major3.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const Major2Routes: Routes = [
  {
    path: '',
    component: Major2Component,
  },
];
const Major2Routing = RouterModule.forChild(Major2Routes)
@NgModule({
  imports: [Major2Routing],
  exports: [RouterModule]
})
export class Major2RoutingModule { }
