import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {LianxiComponent} from './lianxi.component';

const LianxiRoutes : Routes = [
  {
    path:'',
    component:LianxiComponent,
    children:[
      {
        path:'',
        loadChildren:'app/share/fulunbo/fulunbo.module#FulunboModule',
      },
    ]
  }
];
const LianxiRouting = RouterModule.forChild(LianxiRoutes)
@NgModule({
    imports:[LianxiRouting],
    exports: [RouterModule]
  }
)
export class LianxiRoutingModule{}

