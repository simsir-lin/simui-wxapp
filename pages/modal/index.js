// pages/modal/index.js
Page({

  data: {
    showModal: false
  },

  toggleModal() {
    this.setData({
      showModal: !this.data.showModal
    });
  }
})