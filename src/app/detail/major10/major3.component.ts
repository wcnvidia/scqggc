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
    des: "培养掌握工程造价管理的程序和方法，能够在施工企业投标和合同管理部门或施工项目从事工程造价，在工程招标代理机构，工程造价咨询机构，工程审计单位从事招标文件，的编制和管理工作的高素质劳动者和技能型人才。",
    bg: "table table-success",
    icon: "glyphicon glyphicon-bookmark fontColor fontSize"
  },
  {
    title: "主要课程",
    des: "建筑力学与机构，建筑工程识图与构造，工程资料整理与招投标，安装工程计量与计价，建筑与装饰工程计量与计价，建筑与装饰工程计量与计价，建筑施工工艺与材料，建筑设备安装施工工艺。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
   {
    title: "就业去向",
    des: "学生毕业后看面向铁路工程公司，建筑工程公司，建筑施工企业，工程建设监理公司，房地产开发企业，设计院，政府基建部门等企业单位从事就业，从事工程造价招标代理，建设项目投融资和投资控制，工程造价确定与控制，投标报价决策，合同管理，工程预决算，工程成本分析，工程咨询，工程监理以及以及工程造价管理相关软件的开发应用和技术支持等岗位工作。",
    bg: "table table-primary",
    icon: "glyphicon glyphicon-user fontColor fontSize"
  },
  {
    title: "深造专业",
    des: "高职：工程造价。本科：工程造价。",
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
