import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {FulunboComponent} from './fulunbo.component';
import {FulunboRoutingModule} from './fulunbo.routes'

@NgModule(
  {
    imports:[CommonModule,CarouselModule.forRoot(),FulunboRoutingModule ],
    declarations:[FulunboComponent],
  }
)
export class FulunboModule {

}
