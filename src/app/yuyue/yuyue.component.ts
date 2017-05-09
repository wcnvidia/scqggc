import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-yuyue',
  templateUrl: './yuyue.component.html',
  styleUrls: ['./yuyue.component.css']
})
export class YuyueComponent implements OnInit {
  item: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.item = af.database.list('/yuyue');
  }
  showMsg() {
    alert("恭喜您预约成功！我们将尽快和您联系！")
  }
  sendFire(nameref: string, genderref: string, phoneref: number, qqref: number, wechatref: string, addressref: string, remarkref: string, ) {

    this.item.push({ newName: nameref, newGender: genderref, newPhone: phoneref, newQq: qqref, newWechat: wechatref, newAddress: addressref, newRemark: remarkref })
  }
  ngOnInit() {
  }

}
