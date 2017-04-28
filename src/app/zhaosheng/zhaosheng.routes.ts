import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {ZhaoshengComponent} from './zhaosheng.component';
const ZhaoshengRoutes : Routes = [
  {
    path: '',
    component: ZhaoshengComponent,

  },

];
const ZhaoshengRouting = RouterModule.forChild(ZhaoshengRoutes)
@NgModule({
  imports: [ ZhaoshengRouting],
  exports: [ RouterModule ]
})
export class ZhaoshengRoutingModule { }
