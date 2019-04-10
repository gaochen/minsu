//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isLogin: app.globalData.userId
  },
  //事件处理函数
  toHome: function(event) {
    let num = event.currentTarget.dataset.home
    app.globalData.visitorId = num
    wx.navigateTo({
      url: `../home${num}/home`
    })
  },
  toLogin: function(event) {
    // 跳转登录
    wx.navigateTo({
      url: `../owner/login/login`
    })
  },
  onLoad: function () {
    // // 查看是否授权
    // wx.getSetting({
    //   success: function(res){
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function(res) {
    //           console.log(res.userInfo)
    //         }
    //       })
    //     }
    //   }
    // })
  },
  onShow: function() {
    this.setData({
      isLogin: app.globalData.userId
    })
  }
})
