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
    des: "培养具备较强的沟通能力，协调能力和应变能力，能够在工商企业的办公室，行政部等部门从事基层管理，行政助理等综合管理类工作，文书写作与处理，档案管理，会议组织与服务等办公室程序性工作的高素质劳动者和技能型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "办公软件应用，常用办公设备使用与维护，办公室事物管理，信息文书与档案管理，会议实务。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后可面向机关事务管理局，新华社，大学出版社等企业事业单位，从事办公室文员，公关人员，领导助理，档案管理员等工作岗位。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：文秘。本科：行政管理。",
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
