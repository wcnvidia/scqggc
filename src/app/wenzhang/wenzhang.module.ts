import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { WenzhangRoutingModule } from './wenzhang.routes';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { Article5Component } from './article5/article5.component';
import { Article6Component } from './article6/article6.component';
import { Article7Component } from './article7/article7.component';
import { Article9Component } from './article9/article9.component';
import { Article10Component } from './article10/article10.component';
import { Article8Component } from './article8/article8.component'

@NgModule(
  {
    imports: [CommonModule, WenzhangRoutingModule],
    declarations: [Article1Component, Article2Component, Article3Component, Article4Component, Article5Component, Article6Component, Article7Component, Article9Component, Article10Component, Article8Component],
  }
)

export class WenzhangModule {

}
