import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail.routes';
import { DetailComponent } from './detail.component';
import { ZhuanyeListModule } from './../share/zhuanye-list/zhuanye-list.module';

@NgModule(
  {
    imports: [CommonModule, DetailRoutingModule,ZhuanyeListModule],
    declarations: [DetailComponent],
  }
)

export class DetailModule {

}
