// pages/management/index.js
Page({
  data: {
    showCheckBox: false,
    dataList: [{
      id: 1,
      checked: false,
      imgSrc: '/images/index.png',
      eventName: '新年',
      afterTime: '43天后'
    }, {
      id: 2,
      checked: false,
      imgSrc: '/images/index.png',
      eventName: '圣诞节',
      afterTime: '35天后'
    }, {
      id: 3,
      checked: false,
      imgSrc: '/images/index.png',
      eventName: '春节',
      afterTime: '65天后'
    }, {
      id: 4,
      checked: false,
      imgSrc: '/images/index.png',
      eventName: '劳动节劳动节劳动节劳动节劳动节劳动节',
      afterTime: '250天后'
    }],
    result: [1, 2]
  },
  showCheckBoxChange() {
    this.setData({
      showCheckBox: !this.data.showCheckBox,
    })
  },
  onChange(event) {
    // const {
    //   index
    // } = event.currentTarget.dataset
    // console.log(event, index)
    // let list = this.data.dataList
    // console.log(list)
    // list[index].checked = event.detail
    // this.setData({
    //   dataList: list,
    // });
    console.log(event)
    this.setData({
      result: event.detail,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        active: 1
      })
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})