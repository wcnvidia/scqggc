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
    des: "培养具备较强的沟通，协调和应变能力，掌握会计基本核算方法，核算程序等知识，，能够在中小企业从事会计，出纳，税务核算与申报等工作的实用性技能中等专业人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "会计基本技能，会计基础，出纳实务，企业会计实务，税费计算与缴纳，会计电算化，会计实务操作，成本业务核算，收银实务。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可在面向四川智多星，成都司会等各类企业事业单位，会计师事务所，资产评估事务所，会计咨询公司，税务代理公司，金融机构等单位就业，从事基层会计核算，会计分析，会计事物管理，可从事统计，税收等岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：会计，会计电算化，财务管理，会计与审计。本科：会计学，财务管理，审计学。",
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
