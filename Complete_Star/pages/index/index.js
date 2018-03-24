//index.js

var app = getApp()
var count = 0;
Page({
  data: {
    param:{
      stars: [0, 1, 2, 3, 4],
      
      srcImage_0: '../../images/star-0.png',
      srcImage_1: '../../images/star-1.png',
      srcImage_2: '../../images/star-2.png',
      srcImage_3: '../../images/star-3.png',
      srcImage_4: '../../images/star-4.png',

      score: 3.9,
      srcImage:'',
    }
  },
  onLoad: function () {
  },

  /*
  //点击左边,半颗星
  selectLeft: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    count = key
    this.setData({
      key: key
    })
  },
  //点击右边,整颗星
  selectRight: function (e) {
    var key = e.currentTarget.dataset.key
    count = key
    this.setData({
      key: key
    })
  },
  startRating: function (e) {
    wx.showModal({
      title: '分数',
      content: "" + count,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  }
  */
})
