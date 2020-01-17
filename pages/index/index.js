Page({

  /**
   * 页面的初始数据
   */
  data: {	
  // 轮播图
    swiper_list:[],
    // 导航分类
    navclassify:[],
    // 时尚女装
    fashion:[]
     
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 轮播图
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res)=> {
        // console.log(res),
          
        this.setData({   
          swiper_list:res.data.message,
          
        })
        // console.log(this.data.swiper_list)
      }
    })
// 导航分类
wx.request({
  url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
  success:(res)=>{
    console.log(res)
    this.setData({
      navclassify:res.data.message
    })
  }
})

// 时尚女装
wx.request({
  url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
  success:(res)=>{
    console.log(res)
   this.setData({
     fashion:res.data.message
   })
  }
}) 
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