import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {BaomingComponent} from './baoming.component';

const BaomingRoutes : Routes = [
  {
    path: '',
    component: BaomingComponent,
    children:[
      {
        path:'',
        loadChildren:'app/share/fulunbo/fulunbo.module#FulunboModule',
      },
    ]
  },
];
const BaomingRouting = RouterModule.forChild(BaomingRoutes)
@NgModule({
  imports: [ BaomingRouting],
  exports: [ RouterModule ]
})
export class BaomingRoutingModule { }
