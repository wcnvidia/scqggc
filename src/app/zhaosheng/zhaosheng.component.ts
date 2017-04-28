import { ZhaoshengModel } from './zhaosheng.model';
import { Component, OnInit } from '@angular/core';
export class Zizhu {
  title: string;
  des: string;
}
const Zizhus: Zizhu[] = [
  {
    title: "免学费", des: "所有全日制正式学籍中职一、二、三年级在校学生均免收学费。"
  },
  {
    title: "国家助学金", des: "全日制正式学籍中职一、二年级涉农专业学生和非涉农专业学生的20%确定（建档立卡家庭经济困难学生全部享受），连片特困地区、民族地区、一、二年级学生全部纳入享受范围，不受20%比例限制2000元／生·年（每月200元，每年10个月）按月发放到受助学生资助卡。"
  },
  {
    title: "建档立卡家庭经济困难中职学生生活费补助", des: "四川户籍建档立卡家庭经济困难的全日制正式学籍中职学生500元／生·期。"
  },
  {
    title: "学校奖助学金", des: "表现良好，成绩优秀者可获得学校500～5000元／年的奖助学金；同时学校为学生提供勤工助学岗位。"
  },
  {
    title: "社会资助", des: "凡符合申请条件者均有机会申请企业及社会公益助学，优秀毕业生可申请创业基金，获得无偿创业资助。"
  },
]
const Jihuas: ZhaoshengModel[] = [
  {
    leibie: "计算机应用专业", pro: "电子竞技", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major1",
  },
  {
    leibie: "计算机应用专业", pro: "动漫设计", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major2",
  },
  {
    leibie: "电子技术应用专业", pro: "新能源汽车维修", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major3",
  },
  {
    leibie: "电子技术应用专业", pro: "智能设备维修", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major4",
  },
  {
    leibie: "旅游服务与管理专业", pro: "城市轨道交通服务", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major5",
  },
  {
    leibie: "旅游服务与管理专业", pro: "航空服务", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major6",
  },
  {
    leibie: "旅游服务与管理专业", pro: "酒店管理", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major7",
  },
  {
    leibie: "会计电算化", pro: "会计", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major8",
  },
  {
    leibie: "会计电算化", pro: "金融事务", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major9",
  },
  {
    leibie: "工程造价", pro: "工程造价", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major10",
  },
  {
    leibie: "电子商务", pro: "电子商务", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major11",
  },
  {
    leibie: "市场营销", pro: "汽车营销", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major12",
  },
  {
    leibie: "市场营销", pro: "房地产营销", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major13",
  },
  {
    leibie: "文秘", pro: "办公室文员", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major14",
  },
  {
    leibie: "机电技术应用", pro: "机电技术应用", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major15",
  },
  {
    leibie: "老年人服务与管理", pro: "*老年人服务", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major16",
  },
  {
    leibie: "市场营销", pro: "服装营销", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major17",
  },
  {
    leibie: "市场营销", pro: "珠宝营销", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major18",
  },
  {
    leibie: "市场营销", pro: "化妆品营销", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major19",
  },
  {
    leibie: "老年人服务与管理", pro: "*营养与保健", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major20",
  },
  {
    leibie: "老年人服务与管理", pro: "*康复技术", plan: "50/40", wenping: "中专／大专", link: "/zhuanye/detail/major20",
  },
]

@Component({
  selector: 'app-zhaosheng',
  templateUrl: './zhaosheng.component.html',
  styleUrls: ['./zhaosheng.component.css']
})
export class ZhaoshengComponent implements OnInit {
  jihuas = Jihuas;
  zizhus = Zizhus;
  constructor() { }

  ngOnInit() {
  }

}
