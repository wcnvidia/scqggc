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
    des: "培养德智体美全面发展，具备较强的沟通能力，协调能力和应变能力，掌握新能源汽车电气系统检测，维修与技术管理等工作的实用型，技能型中等专业人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "汽车发动机机械系统检修，汽车底盘机械系统维修，新能源汽车电气系统检修，新能源汽车发动机电控系统故障诊断与修复，新能源汽车安全与舒适，系统故障诊断与修复，新能源汽车综合故障诊断等。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后面向普天新能源，华为，飞天汽车，以及大洋电机，上海电驱动，京津电动，北大先行，比亚迪，赛威微电子公司等新能源汽车服务企业就业，从事新能源汽车机电维修，车辆性能检测，新能源汽车新技术培训，新能源车企维修业务接待，新能源汽车销售，管理服务等岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：新能源汽车技术。本科：交通运输",
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
