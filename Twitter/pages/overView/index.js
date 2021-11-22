// pages/overView/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        page: 1,
        jokeTextdata: [],
        imgSrc: '/images/index.png'
    },
    //定义一个方法调用接口获取数据
    getDate() {
        wx.showLoading({
            title: '加载中...',
        })
        // wx.request({
        //     url: `https://api.avatardata.cn/Joke/QueryJokeByTime?key=594edd91dc424fddb3f99a24833093ba&page=${this.data.page}&rows=10&sort=asc&time=1418745237`, //仅为示例，并非真实的接口地址

        //     header: {
        //         'content-type': 'application/json' // 默认值
        //     },
        //     success: res => {
        //         //console.log(res.data)
        //         this.setData({
        //             jokeTextdata: [...this.data.jokeTextdata, ...res.data.result] //使用展开运算可以缓存上次请求的数据
        //         },()=>{//关闭加载动画
        //             wx.hideLoading()
        //         })
        //     }
        // })
        wx.hideLoading()
    },
    //下拉到底触发的函数
    onReachBottom() {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getDate()
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
                active: 0
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
    // onPullDownRefresh: function () {
    //     wx.showToast({
    //         title: '不能再拉我啦！',
    //         icon: 'loading',
    //         duration: 1000
    //     })

    // },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        let {
            page
        } = this.data
        //触发加载更多
        this.setData({
            page: page + 1
        }, () => { //回调函数更新data异步
            //发送请求加载数据
            this.getDate()
        })

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})