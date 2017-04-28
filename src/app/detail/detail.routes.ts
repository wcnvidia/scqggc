import { DetailComponent } from './detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const DetailRoutes: Routes = [
  {
    path: '',
    component: DetailComponent,
    children:[
      {
        path:'major1',
        loadChildren:'app/detail/major1/major1.module#Major1Module',
      },
      {
        path:'major2',
        loadChildren:'app/detail/major2/major2.module#Major2Module',
      },
      {
        path:'major3',
        loadChildren:'app/detail/major3/major3.module#Major3Module',
      },
      {
        path:'major4',
        loadChildren:'app/detail/major4/major3.module#Major2Module',
      },
      {
        path:'major5',
        loadChildren:'app/detail/major5/major3.module#Major2Module',
      },
      {
        path:'major6',
        loadChildren:'app/detail/major6/major3.module#Major2Module',
      },
      {
        path:'major7',
        loadChildren:'app/detail/major7/major3.module#Major2Module',
      },
      {
        path:'major8',
        loadChildren:'app/detail/major8/major3.module#Major2Module',
      },
      {
        path:'major9',
        loadChildren:'app/detail/major9/major3.module#Major2Module',
      },
      {
        path:'major10',
        loadChildren:'app/detail/major10/major3.module#Major2Module',
      },
      {
        path:'major11',
        loadChildren:'app/detail/major11/major3.module#Major2Module',
      },
      {
        path:'major12',
        loadChildren:'app/detail/major12/major3.module#Major2Module',
      },
      {
        path:'major13',
        loadChildren:'app/detail/major13/major3.module#Major2Module',
      },
      {
        path:'major14',
        loadChildren:'app/detail/major14/major3.module#Major2Module',
      },
      {
        path:'major15',
        loadChildren:'app/detail/major15/major3.module#Major2Module',
      },
      {
        path:'major16',
        loadChildren:'app/detail/major16/major3.module#Major2Module',
      },
      {
        path:'major17',
        loadChildren:'app/detail/major17/major3.module#Major2Module',
      },
      {
        path:'major18',
        loadChildren:'app/detail/major18/major3.module#Major2Module',
      },
      {
        path:'major19',
        loadChildren:'app/detail/major19/major3.module#Major2Module',
      },
      {
        path:'major20',
        loadChildren:'app/detail/major20/major3.module#Major2Module',
      },


    ]
  },
];
const DetailRouting = RouterModule.forChild(DetailRoutes)
@NgModule({
  imports: [DetailRouting],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
