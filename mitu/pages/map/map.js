const app = getApp()

Page({
    data: {
        circles: null,
        addressList: [
            {},
            {
                longitude: 104.08697,
                latitude: 30.6535,
                name: '朗御',
                address: '锦江区大慈寺路3号'
            },
            {
                longitude: 104.08697,
                latitude: 30.6535,
                name: '朗御',
                address: '锦江区大慈寺路3号'
            },
            {
                longitude: 104.089070,
                latitude: 30.652601,
                name: '覓兎MituCafe',
                address: '均隆街71号'
            },
            {
                longitude: 104.089070,
                latitude: 30.652601,
                name: '覓兎MituCafe',
                address: '均隆街71号'
            },
            {
                longitude: 104.090416,
                latitude: 30.662132,
                name: '华星路',
                address: '华星路'
            }
        ]
        // markers: [{
        //   iconPath: "/images/map.jpg",
        //   id: 0,
        //   latitude: 30.653500,
        //   longitude: 104.086970,
        //   width: 50,
        //   height: 50
        // }]
    },
    onLoad: function() {
        const roomId = app.globalData.visitorId
        const target = this.data.addressList[roomId]

        this.setData({
            circles: [
                {
                    longitude: target.longitude,
                    latitude: target.latitude,
                    color: '#ffffff',
                    fillColor: '#008B8B66',
                    radius: 400,
                    strokeWidth: 0
                }
            ]
        })
    },
    openLocation: function() {
        const roomId = app.globalData.visitorId
        const target = this.data.addressList[roomId]
        wx.openLocation(target)
    }
})
