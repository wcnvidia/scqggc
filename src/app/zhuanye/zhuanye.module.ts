import { ZhuanyeListModule } from './../share/zhuanye-list/zhuanye-list.module';
import { AdModule } from './../share/ad/ad.module';
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZhuanyeComponent } from './zhuanye.component';
import { ZhuanyeRoutingModule } from './zhuanye.routes';


@NgModule(
  {
    imports: [CommonModule, ZhuanyeRoutingModule, AdModule, ZhuanyeListModule],
    declarations: [ZhuanyeComponent],
  }
)

export class ZhuanyeModule {

}
