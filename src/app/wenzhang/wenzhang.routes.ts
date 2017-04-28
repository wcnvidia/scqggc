import { Routes, RouterModule } from '@angular/router';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { Article5Component } from './article5/article5.component';
import { Article6Component } from './article6/article6.component';
import { Article7Component } from './article7/article7.component';
import { Article8Component } from './article8/article8.component';
import { Article9Component } from './article9/article9.component';
import { Article10Component } from './article10/article10.component';
import { NgModule } from '@angular/core';

const WenzhangRoutes: Routes = [
  { path: 'article1', component: Article1Component },
  { path: 'article2', component: Article2Component },
  { path: 'article3', component: Article3Component },
  { path: 'article4', component: Article4Component },
  { path: 'article5', component: Article5Component },
  { path: 'article6', component: Article6Component },
  { path: 'article7', component: Article7Component },
  { path: 'article8', component: Article8Component },
  { path: 'article9', component: Article9Component },
  { path: 'article10', component: Article10Component },
];
const WenzhangRouting = RouterModule.forChild(WenzhangRoutes)
@NgModule({
  imports: [WenzhangRouting],
  exports: [RouterModule]
})
export class WenzhangRoutingModule { }
