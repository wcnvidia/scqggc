import { AdModule } from './../share/ad/ad.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaikuangComponent } from './gaikuang.component';
import { GaikuangRoutingModule } from './gaikuang.routes';


@NgModule(
  {
    imports: [CommonModule, GaikuangRoutingModule,AdModule],
    declarations: [GaikuangComponent,],
  }
)
export class GaikuangModule {

}
