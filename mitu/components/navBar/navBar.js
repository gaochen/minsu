const app = getApp()

Component({
  properties: {
    index: Number,
    isLogin: Boolean
  },
  methods: {
    toVisitor: function () {
      if (this.properties.index !== 0) {
        wx.redirectTo({
          url: `/pages/index/index`
        })
      }
    },
    toOwner: function () {
      if (this.properties.index !== 1) {
        wx.redirectTo({
          url: `/pages/owner/index/index`
        })
      }
    }
  }
})
