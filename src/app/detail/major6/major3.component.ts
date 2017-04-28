import { Component, OnInit } from '@angular/core';
export class Card {
  title: string;
  des: string;
  bg: string;
  icon: string;
}
const Cards: Card[] = [
  {
    title: "培养目标",
    des: "培养掌握航空服务专业知识，具备较强的沟通能力，协调能力和应变能力，能在机场，航空公司，航空服务企业从事机票销售，定做操作，呼叫中心坐席服务，地勤服务，民航电子商务平台运营与维护的实用性技能型中等专业人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "民航服务与沟通，民航服务礼仪，民航商务运输，航线地理，安检岗位知识，民航旅客运输，民航货物运输，航空运输市场营销实务。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可在各机场集团公司，首都机场，东方航空，四川龙翔，八千翼，携程等航空商旅服务企业，从事客服，订单处理等岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：航空服务。本科：交通运输。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
]
@Component({
  selector: 'app-major2',
  templateUrl: './major3.component.html',
  styleUrls: ['./major3.component.css']
})
export class Major2Component implements OnInit {
cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
