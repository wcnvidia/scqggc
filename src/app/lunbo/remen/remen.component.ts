import { RemenModel } from './remen.model';
import { Component, OnInit } from '@angular/core';

const Remens: RemenModel[] = [
  {
    title: "电子竞技", des: "培养德智体美全面发展，能够在电竞产业从事职业游戏玩家，教练员，裁判员，职业经纪人，赛事策划与执行，战术与数据分析，电竞主持与主播，电竞商务等相关工作的技能型人才。", link: "/zhuanye/detail/major1", img: "http://i2.muimg.com/591259/ccb147f4bb37df63.jpg"
  },
  {
    title: "动漫设计", des: "培养德智体美全面发展，熟练掌握计算机图形，图像处理，动漫设计与制作的基本知识和技能，能够在广告公司，游戏公司，影视公司，动漫制作等等技术应用型人才", link: "/zhuanye/detail/major2", img: "http://i2.muimg.com/591259/6d8611fac1a0943c.jpg"
  },
  {
    title: "新能源汽车维修", des: "培养德智体美全面发展，具备较强的沟通能力，协调能力和应变能力，掌握新能源汽车电气系统检测，维修与技术管理等工作的实用型，技能型中等专业人才", link: "/zhuanye/detail/major3", img: "http://i2.muimg.com/591259/47565f53b1a99f37.jpg"
  },
]
@Component({
  selector: 'app-remen',
  templateUrl: './remen.component.html',
  styleUrls: ['./remen.component.css']
})
export class RemenComponent implements OnInit {
  remens = Remens
  constructor() { }

  ngOnInit() {
  }

}
