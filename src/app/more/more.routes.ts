import { MoreComponent } from './more.component';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';


const MoreRoutes : Routes = [
  {
    path: '',
    component: MoreComponent,
  },
 

];
const MoreRouting = RouterModule.forChild(MoreRoutes)
@NgModule({
  imports: [ MoreRouting],
  exports: [ RouterModule ]
})
export class MoreRoutingModule { }
