
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {LunboComponent} from './lunbo.component';

const LunboRoutes : Routes = [
  {
    path: '',
    component: LunboComponent,
    children:[
      {
        path:'',
        loadChildren:'app/share/zhulunbo/zhulunbo.module#ZhulunboModule',
      },
      ]
  },
 

];
const LunboRouting = RouterModule.forChild(LunboRoutes)
@NgModule({
  imports: [ LunboRouting],
  exports: [ RouterModule ]
})
export class LunboRoutingModule { }
