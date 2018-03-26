Page({
  data: {
    markers: [{
      iconPath: "/images/map.jpg",
      id: 0,
      latitude: 30.653500,
      longitude: 104.086970,
      width: 50,
      height: 50
    }]
  },
  toPicture: function() {
    wx.navigateTo({
      url: `../picture/picture`
    })
  },
  toMap: function() {
    wx.navigateTo({
      url: `../map/map`
    })
  },
  onLoad: function () {
    
  }
})
