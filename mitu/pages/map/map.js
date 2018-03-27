
Page({
  data: {
    circles: [{
      longitude: 104.086970,
      latitude: 30.653500,
      color: '#ffffff',
      fillColor: '#008B8B66',
      radius: 400,
      strokeWidth: 0
    }]
    // markers: [{
    //   iconPath: "/images/map.jpg",
    //   id: 0,
    //   latitude: 30.653500,
    //   longitude: 104.086970,
    //   width: 50,
    //   height: 50
    // }]
  },
  onLoad: function () {
  },
  openLocation: function() {
    wx.openLocation({  
      latitude: 30.653500,  
      longitude: 104.086970,  
      name: '朗御',  
      address:'锦江区大慈寺路3号'  
    })
  }
})
