import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {YuyueComponent} from './yuyue.component';
import {YuyueRoutingModule} from './yuyue.routes';
import { AngularFireModule } from 'angularfire2';



export const firebaseConfig = {
  apiKey: "AIzaSyCudvHUzIznvD8qOgE5k3pxPSsTV2lUA_M",
  authDomain: "scqggc.firebaseapp.com",
  databaseURL: "https://scqggc.firebaseio.com",
  storageBucket: "scqggc.appspot.com",
  messagingSenderId: "650412719688"
};


@NgModule(
  {
    imports:[CommonModule,YuyueRoutingModule, AngularFireModule.initializeApp(firebaseConfig),],
    declarations:[YuyueComponent,],
  }
)
export class YuyueModule {

}
