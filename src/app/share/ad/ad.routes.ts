import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {AdComponent} from './ad.component';

const AdRoutes : Routes = [
  {
    path: '',
    component: AdComponent },
];
const AdRouting = RouterModule.forChild(AdRoutes)
@NgModule({
  imports: [ AdRouting],
  exports: [ RouterModule ]
})
export class AdRoutingModule { }
