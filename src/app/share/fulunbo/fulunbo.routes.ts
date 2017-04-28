import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {FulunboComponent} from './fulunbo.component';

const FulunboRoutes : Routes = [
  {
    path: '',
    component: FulunboComponent },
];
const FulunboRouting = RouterModule.forChild(FulunboRoutes)
@NgModule({
  imports: [ FulunboRouting],
  exports: [ RouterModule ]
})
export class FulunboRoutingModule { }
