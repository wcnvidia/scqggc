import { AdModule } from './../share/ad/ad.module';
import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {DongtaiComponent} from './dongtai.component';
import {DongtaiRoutingModule} from './dongtai.routes';


@NgModule(
  {
    imports:[CommonModule,DongtaiRoutingModule,AdModule],
    declarations:[DongtaiComponent],
  }
)
export class DongtaiModule {

}
