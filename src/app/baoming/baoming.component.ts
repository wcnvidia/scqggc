import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-baoming',
  templateUrl: './baoming.component.html',
  styleUrls: ['./baoming.component.css'],

})

export class BaomingComponent implements OnInit {
  item: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.item = af.database.list('/item');
  }

  showMsg() {
    alert("恭喜您报名成功！我们将尽快和您联系！")
  }
sendFire(nameref:string,genderref:string,phoneref:number,qqref:number,wechatref:string,proref:string,schoolref:string,addressref:string,remarkref:string,){

this.item.push({newName:nameref,newGender:genderref,newPhone:phoneref,newQq:qqref,newWechat:wechatref,newPro:proref,newSchool:schoolref,newAddress:addressref,newRemark:remarkref})
}
  ngOnInit() {
  }

}
