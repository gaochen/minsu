const app = getApp()

Page({
    data: {
        src: '',
        list: [
            '',
            'cloud://dev-cc52fc.6465-dev-cc52fc/home1/detail.jpg',
            'cloud://dev-cc52fc.6465-dev-cc52fc/home2/detail.jpg',
            'cloud://dev-cc52fc.6465-dev-cc52fc/home3/detail.jpg',
            'cloud://dev-cc52fc.6465-dev-cc52fc/home4/detail.jpg',
            'cloud://dev-cc52fc.6465-dev-cc52fc/home5/detail.jpg'
        ]
    },
    onLoad: function() {
        const roomId = app.globalData.visitorId
		const src = this.data.list[roomId]
		
		this.setData({
			src: src
		})
    }
})
