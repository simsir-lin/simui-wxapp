var simui = require('../../simui/simui');
var app = getApp();

Page(Object.assign({}, simui.TopTip, {
  data: {
    showDialog: false,
    types: [{
      'type': 'default',
      title: '默认'
    }, {
      'type': 'success',
      title: '成功'
    }, {
      'type': 'error',
      title: '失败'
    }, {
      'type': 'warning',
      title: '警告'
    }, {
      'type': 'info',
      title: '提示'
    }],
    index: 0,
    msg: '测试内容'
  },
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  handleInput(e) {
    this.setData({
      msg: e.detail.value
    })
  },
  show() {
    this.showSimTopTip(this.data.msg, this.data.types[this.data.index].type);
  }
}));
