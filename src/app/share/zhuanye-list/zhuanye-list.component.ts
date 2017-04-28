import { Component, OnInit } from '@angular/core';

export class List {
  name: string;
  badge: string;
  link: string;
}
const Lists: List[] = [
  { name: '电子竞技', badge: '计算机应用专业', link: '/zhuanye/detail/major1' },
  { name: '动漫设计', badge: '计算机应用专业', link: '/zhuanye/detail/major2' },
  { name: '新能源汽车维修', badge: '电子技术应用专业', link: '/zhuanye/detail/major3' },
  { name: '智能设备维修', badge: '电子技术应用专业', link: '/zhuanye/detail/major4' },
  { name: '城市轨道交通服务', badge: '旅游服务与管理专业', link: '/zhuanye/detail/major5' },
  { name: '航空服务', badge: '旅游服务与管理专业', link: '/zhuanye/detail/major6' },
  { name: '酒店管理', badge: '旅游服务与管理专业', link: '/zhuanye/detail/major7' },
  { name: '会计', badge: '会计电算化', link: '/zhuanye/detail/major8' },
  { name: '金融事务', badge: '会计电算化', link: '/zhuanye/detail/major9' },
  { name: '工程造价', badge: '工程造价', link: '/zhuanye/detail/major10' },
  { name: '电子商务', badge: '电子商务', link: '/zhuanye/detail/major11' },
  { name: '汽车营销', badge: '市场营销', link: '/zhuanye/detail/major12' },
  { name: '房地产营销', badge: '市场营销', link: '/zhuanye/detail/major13' },
  { name: '办公室文员', badge: '文秘', link: '/zhuanye/detail/major14' },
  { name: '机电技术应用', badge: '机电技术应用', link: '/zhuanye/detail/major15' },
  { name: '老年人服务', badge: '老年人服务与管理', link: '/zhuanye/detail/major16' },
  { name: '服装营销', badge: '市场营销', link: '/zhuanye/detail/major17' },
  { name: '珠宝营销', badge: '市场营销', link: '/zhuanye/detail/major18' },
  { name: '化妆品营销', badge: '市场营销', link: '/zhuanye/detail/major19' },
]

@Component({
  selector: 'app-zhuanye-list',
  templateUrl: './zhuanye-list.component.html',
  styleUrls: ['./zhuanye-list.component.css']
})
export class ZhuanyeListComponent implements OnInit {
  lists = Lists;
  public isCollapsed: boolean = false;

  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
