//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
		imgUrls: [
			'../images/index1.gif',
			'../images/index2.gif',
			'../images/index3.gif'
		],
		imgUrl:[
			'../images/index4.gif'
		],
		list:[
			{
				img:'../images/index5.gif',
				pic:'宠爱',
				desc:'￥4299',
				line:'8599',
				right:'已售1178 >'
			},
			{
				img: '../images/index6.gif',
				pic: '爱',
				desc: '￥2999',
				line: '6999',
				right: '已售1178 >'
			}
		],
		btnList:[
			{
				img:'../images/index7.gif',
				pic:'俏皮的你',
				desc:'5',
				xiao:'38'
			},{
				img: '../images/index8.gif',
				pic: '夕阳和蓝天',
				desc: '7',
				xiao: '32'
			},{
				img: '../images/index9.gif',
				pic: '简单纯粹的爱',
				desc: '8',
				xiao: '32'
			},{
				img: '../images/index10.gif',
				pic: '日本水手服',
				desc: '4',
				xiao: '18'
			},{
				img: '../images/index11.gif',
				pic: '街拍',
				desc: '11',
				xiao: '43'
			},{
				img: '../images/index12.gif',
				pic: '红发',
				desc: '10',
				xiao: '40'
			}
		],
		keList:[
			{
				img:'../images/w1.gif',
				pic:'街拍'
			},{
				img:'../images/w2.gif',
				pic:'可爱的你'
			},{
				img:'../images/w3.gif',
				pic:'夕阳和蓝天'
			},{
				img: '../images/w4.gif',
				pic: '简单纯粹的爱'
			}
		],
		huoList:[
			{
				img:'../images/w5.gif',
				pic:'[2018.1.18]',
				desc:'宝宝照 • 399',
				zhu:'拍摄内容ShootingContent金牌团队..'
			},
			{
				img: '../images/w6.gif',
				pic: '[2018.1.18]',
				desc: '温暖一家亲 • 999',
				zhu: ''
			},
			{
				img: '../images/w7.gif',
				pic: '[2017.11.24]',
				desc: '全家福留恋册 • 520',
				zhu: '拍摄内容ShootingContent金牌团队..'
			}
		],
		autoplay: true,
		interval: 5000,
		duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
   
  }
})
