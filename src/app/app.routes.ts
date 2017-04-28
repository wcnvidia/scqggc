import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'app/lunbo/lunbo.module#LunboModule'
  },
  {
    path: 'gaikuang',
    loadChildren: 'app/gaikuang/gaikuang.module#GaikuangModule'
  },
  {
    path: 'zhuanye',
    loadChildren: 'app/zhuanye/zhuanye.module#ZhuanyeModule'
  },
  {
    path: 'zhuanye/detail',
    loadChildren: 'app/detail/detail.module#DetailModule'
  },
  {
    path: 'wenzhang',
    loadChildren: 'app/wenzhang/wenzhang.module#WenzhangModule'
  },
  {
    path: 'dongtai',
    loadChildren: 'app/dongtai/dongtai.module#DongtaiModule'
  },
  {
    path: 'zhaosheng',
    loadChildren: 'app/zhaosheng/zhaosheng.module#ZhaoshengModule'
  },
  {
    path: 'baoming',
    loadChildren: 'app/baoming/baoming.module#BaomingModule'
  },
  {
    path: 'lianxi',
    loadChildren: 'app/lianxi/lianxi.module#LianxiModule'
  },
  {
    path: 'more',
    loadChildren: 'app/more/more.module#MoreModule'
  },
  {
    path: '**',
    loadChildren: 'app/lunbo/lunbo.module#LunboModule'
  },
]
@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
