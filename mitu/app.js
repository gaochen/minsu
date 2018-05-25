import api from './api/index'
import ajax from './api/ajax'

//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          // 获取用户openId
          ajax({
            url: api.getUserOpenId,
            method: 'POST',
            data: {
              jscode: res.code,
              mini_key: this.globalData.mini_key
            },
            success: res => {
              this.globalData.openId = res.data.data.openid
            }
          }).then((res) => {
            // 获取openId成功之后，用户登录，禁
            return ajax({
              url: api.login,  
              method: 'POST',
              data: {
                open_id: this.globalData.openId,
                mini_key: this.globalData.mini_key
              }
            })
          }).catch((error) => {
            console.log(error)
          })
        }
      }
    })
  },
  globalData: {
    mini_key: 'customer_dev_v1',
    openId: null,
    token: null
  }
})