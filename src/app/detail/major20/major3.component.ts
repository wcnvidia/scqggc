import { Component, OnInit } from '@angular/core';
export class Card {
  title: string;
  des: string;
  bg: string;
  icon: string;
}
const Cards: Card[] = [
  {
    title: "目标",
    des: "主要培养具有电子信息技术基础知识与能力，电子产品的装置，调试及设计的基本能力，对办公自动化设备，家用电子产品电路图的阅读分析与安装，调试，维护能力，对机电设备进行智能控制的设计和组织能力，具有阅读英语资料和计算机应用能力的高素质技能型人才。",
    bg: "table table-warning",
    icon: "glyphicon glyphicon-tags fontColor fontSize"
  },
  {
    title: "课程",
    des: "电工基础，电子电工技术应用，电路分析，电子技术，c/c++语言程序设计，单片机原理与应用，嵌入式设计，数字信号处理，dsp原理及应用，数字信号处理，单片机原理与接口技术，通信原理，电视原理，语音信号处理等。",
    bg: "table table-rose",
    icon: "glyphicon glyphicon-education fontColor fontSize"
  },
  {
    title: "证书",
    des: "计算机操作证，电工证，电工上岗证，焊工证，通讯设备检验员，电子电路制造员，通信设备制造员，电子设备维修证。",
    bg: "table table-danger",
    icon: "glyphicon glyphicon-book fontColor fontSize"
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
