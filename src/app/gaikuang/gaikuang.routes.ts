import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {GaikuangComponent} from './gaikuang.component';

const GaikuangRoutes : Routes = [
  {
    path: '',
    component: GaikuangComponent,
    children:[
      {
        path:'',
        loadChildren:'app/share/fulunbo/fulunbo.module#FulunboModule',
      },
    ]
  },
];
const GaikuangRouting = RouterModule.forChild(GaikuangRoutes)
@NgModule({
  imports: [ GaikuangRouting],
  exports: [ RouterModule ]
})
export class GaikuangRoutingModule { }
