import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {DongtaiComponent} from './dongtai.component';

const DongtaiRoutes : Routes = [
  {
    path: '',
    component: DongtaiComponent,
    children:[
      {
        path:'',
        loadChildren:'app/share/fulunbo/fulunbo.module#FulunboModule',
      },
    ]
  },
];
const DongtaiRouting = RouterModule.forChild(DongtaiRoutes)
@NgModule({
  imports: [ DongtaiRouting],
  exports: [ RouterModule ]
})
export class DongtaiRoutingModule { }
