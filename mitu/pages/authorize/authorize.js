import api from '../../api/index'
import ajax from '../../api/ajax'

const app = getApp()

Page({
  data: {
  },
  getUserInfo: function(e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      ajax({
        url: api.createUser,
        method: 'POST',
        data: {
          open_id: app.globalData.openId,
          mini_key: app.globalData.mini_key,
          user_name: e.detail.userInfo.nickName,
          user_head: e.detail.userInfo.avatarUrl,
          user_sex: e.detail.userInfo.gender
        },
        success: (res) => {
          // 用户创建成功之后登录
          ajax({
            url: api.login,
            method: 'POST',
            data: {
              open_id: app.globalData.openId,
              mini_key: app.globalData.mini_key
            }  
          })
        }
      })
      wx.redirectTo({
        url: '../index/index'
      })
    }
  },
  onLoad: function () {
  }
})
