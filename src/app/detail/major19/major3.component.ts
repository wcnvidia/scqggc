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
    des: "​培养具备较强的沟通、协调和应变能力，掌握化妆品的使用和营销技巧，能够在综合美容机构从事美容师、美容顾问，在化妆品公司从事化妆品营销及管理等工作的高素质劳动者和技能型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "化妆品化学、中医养生美容、美容皮肤科学、彩妆技术、整体造型设计、化妆品营销、顾客心理分析、芳香疗法技术、流行资讯、面部护理、身体护理、化妆品应用综合实训。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可面向宝洁、欧莱雅集团、雅思兰黛、玫琳凯（中国）、广东雅倩、上海新高姿、珀莱雅、广州康钰生物科技、雅芳等化妆品企业就业，以及综合性美容会所、医疗健康管理中心工作，从事讲师、督导、市场策划、商务洽谈、商超运营、店面运营、客服、采供、品牌推广、彩妆顾问等岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：化妆品营销与使用技术。本科：市场营销学。",
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
cards = Cards
  constructor() { }

  ngOnInit() {
  }

}
