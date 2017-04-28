import { DetailModule } from './../detail/detail.module';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {ZhuanyeComponent} from './zhuanye.component';

const ZhuanyeRoutes : Routes = [
  {
    path:'',
    component:ZhuanyeComponent,
    children:[
      {
        path:'',
        loadChildren:'app/share/fulunbo/fulunbo.module#FulunboModule',
      },
    ]
  }
];
const ZhuanyeRouting = RouterModule.forChild(ZhuanyeRoutes)
@NgModule({
   imports:[ZhuanyeRouting],
   exports: [RouterModule]
  }
)
export class ZhuanyeRoutingModule{}
