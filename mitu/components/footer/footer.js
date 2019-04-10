const app = getApp()

Component({
    data: {
        price: 0
    },
    methods: {
        toCalender: function() {
            wx.navigateTo({
                url: `/pages/calender/calender`
            })
        }
    },
    ready: function() {
        const priceList = [0, 268, 268, 428, 338, 368]
        const roomId = app.globalData.visitorId
        this.setData({
            price: priceList[roomId]
        })
    }
})
