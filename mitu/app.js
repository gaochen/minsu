//app.js
App({
    onLaunch: function() {
        wx.cloud.init({
            // env: 'dev',
            traceUser: true
        })
    },
    globalData: {
        userId: null,
        visitorId: null,     // 游客浏览器的房间Id
    }
})
