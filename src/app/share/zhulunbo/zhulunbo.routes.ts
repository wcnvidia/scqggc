import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {ZhulunboComponent} from './zhulunbo.component';

const ZhulunboRoutes : Routes = [
  {
    path: '',
    component: ZhulunboComponent },
];
const ZhulunboRouting = RouterModule.forChild(ZhulunboRoutes)
@NgModule({
  imports: [ ZhulunboRouting],
  exports: [ RouterModule ]
})
export class ZhulunboRoutingModule { }

