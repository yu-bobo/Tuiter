Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [{
        pagePath: "/pages/overView/index",
        text: "总览",
        icon: 'wap-home-o',
        info:0,
      },
      {
        pagePath: "/pages/management/index",
        text: "管理",
        icon: 'sign',
        info:0,
      },
      {
        pagePath: "/pages/message/index",
        text: "消息",
        icon: 'chat-o',
        info:10,
      },
      {
        pagePath: "/pages/mine/index",
        text: "我的",
        icon: 'user-o',
        info:0,
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      const index = e.detail
      const url = this.data.list[index].pagePath
      wx.switchTab({
        url: url
      })
      this.setData({
        active: index
      })
    }
  }
})