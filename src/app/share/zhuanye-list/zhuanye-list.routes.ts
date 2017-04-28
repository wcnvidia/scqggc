import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ZhuanyeListComponent } from './zhuanye-list.component';
const ZhuanyeListRoutes: Routes = [
    {
        path: '',
        component: ZhuanyeListComponent,
    },


];
const ZhuanyeListRouting = RouterModule.forChild(ZhuanyeListRoutes)
@NgModule({
    imports: [ZhuanyeListRouting],
    exports: [RouterModule]
})
export class ZhuanyeListRoutingModule { }
