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
    des: "培养具有较强的沟通力，协调力和应变能力，掌经济基础管理理论 ，酒店，餐饮与旅游基础知识，具备酒店基本管理与服务能力，能够在各类星级酒店从事基层管理及餐饮，客房服务工作的实用型，技能型中等人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "现代酒店营销，餐饮服务与管理，前厅与客房管理，酒店服务技能，客房服务与管理，饭店服务活动策划，饭店产品营销，饭店服务心理学。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "本专业类学生毕业后可面向各类旅游公司从事旅游管理部门工作人员，也可到各类酒店，饭店从事前厅接待，客房服务，宾馆楼层管理，大唐经理，对外联络，市场调查，信息服务，业务咨询，商务洽谈等工作。可进入洲际酒店，世外桃源酒店，希尔顿酒店等酒店和大饭店",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：酒店管理，旅游管理。本科：酒店管理，旅游管理。",
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
