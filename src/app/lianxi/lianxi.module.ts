import { AdModule } from './../share/ad/ad.module';
import { NgModule,  }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import{LianxiComponent} from './lianxi.component';
import {LianxiRoutingModule} from './Lianxi.routes';


@NgModule(
  {
    imports:[CommonModule,LianxiRoutingModule,AdModule],
    declarations:[LianxiComponent,],
  }
)

export class LianxiModule {
  

}
