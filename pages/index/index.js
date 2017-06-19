var app = getApp();

Page({
  data: {
    checked: true
  },
  navigateTo(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }
});
