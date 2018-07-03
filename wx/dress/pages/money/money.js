// pages/money/money.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		items: [
			{ name: 'USA', value: '男女各三套' },
			{ name: 'CHN', value: '男女各四套' },
			{ name: 'BRA', value: '男女各五套' },
			{ name: 'JPN', value: '男女各六套' }
		],
		itemsCheck: [
			{ name: 'USA', value: '韩式' },
			{ name: 'CHN', value: '中式' },
			{ name: 'BRA', value: '欧式' },
			{ name: 'JPN', value: '简约' },
			{ name: 'ENG', value: '旅行' },
			{ name: 'TUR', value: '个性' }
		],
		itemsList: [
			{ name: 'USA', value: '橘子洲' },
			{ name: 'CHN', value: '梅溪湖' },
			{ name: 'BRA', value: '童话岛' },
			{ name: 'JPN', value: '山水洲城' },
			{ name: 'ENG', value: '圣爵菲斯' },
			{ name: 'TUR', value: '麓谷公园' }
		],
		itemsPhoto: [
			{ name: 'USA', value: '1-2个' },
			{ name: 'CHN', value: '2-4个' },
			{ name: 'BRA', value: '4-8个' },
			{ name: 'JPN', value: '8-10个' }
		],
		itemsPhotoItem: [
			{ name: 'USA', value: '1本' },
			{ name: 'CHN', value: '2本' },
			{ name: 'BRA', value: '3本' },
			{ name: 'JPN', value: '4本' }
		],
		itemsListPhoto: [
			{ name: 'USA', value: '水下' },
			{ name: 'CHN', value: '马场' },
			{ name: 'BRA', value: '夜景' },
			{ name: 'JPN', value: '悬浮' },
			{ name: 'ENG', value: '草原' },
			{ name: 'TUR', value: '花海' },
			{ name:'floor',value: '海景' },
			{ name:'tea' , value: '森林' },
			{ name: 'move',value:'微电影'}
		]
	},
	radioChange: function (e) {
		console.log('radio发生change事件，携带value值为：', e.detail.value)
	},
	checkboxChange: function (e) {
		console.log('checkbox发生change事件，携带value值为：', e.detail.value)
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})