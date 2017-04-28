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
    des: "培养具备较强的沟通能力，协调能力，应变能力，能够在城市轨道交通运营领域的管理，研究和部门的开发，从事行车组织及调度组织，客运组织，运输指挥等现场操作工作的实用性技能中等专业人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "轨道交通运输处理技术，城市轨道交通运营信号基础，轨道交通运营管理，城市轨道交通客运组织，城市轨道交通安全，轨道交通战场设计，城市轨道交通运输技术管理。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可进入天府通公司，成都铁路局，城市轨道交通集团等单位，主要从事城市轨道交通行车组织及调度能力，客运组织，综合管理工作，亦可从事城市轨道交通运营管理，行车调度指挥，客运服务等岗位。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：城市轨道交通运营管理。本科：交通运输。",
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
