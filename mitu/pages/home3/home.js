Page({
  data: {
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
