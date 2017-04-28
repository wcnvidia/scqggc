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
    des: "培养德智体美全面发展，能够在电竞产业从事职业游戏玩家，教练员，裁判员，职业经纪人，赛事策划与执行，战术与数据分析，场地运营与维护，俱乐部运营与管理，电竞主持与主播，电竞商务等相关工作的技能型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "电子竞技发展史，电子竞技技能，电子竞技主持与主播，电竞赛事运营与管理，电子竞技裁判，电子竞技裁判，电子竞技技能培养实训。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可面向电子竞技运动，电竞服务与管理，电竞数字媒体，体育医疗就业，从事数据分析师，教练，赛事活动组织运营和管理服务等等",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：电子竞技。本科：电子竞技分析",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
]

@Component({
  selector: 'app-major1',
  templateUrl: './major1.component.html',
  styleUrls: ['./major1.component.css'],
})
export class Major1Component implements OnInit {
  cards = Cards;
  constructor() { }

  ngOnInit() {
  }

}
