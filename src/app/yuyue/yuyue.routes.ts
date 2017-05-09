import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {YuyueComponent} from './yuyue.component';

const YuyueRoutes : Routes = [
  {
    path: '',
    component: YuyueComponent,
  },
 
];
const YuyueRouting = RouterModule.forChild(YuyueRoutes)
@NgModule({
  imports: [ YuyueRouting],
  exports: [ RouterModule ]
})
export class YuyueRoutingModule { }
