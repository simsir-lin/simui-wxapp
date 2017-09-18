var simui = require('../../simui/simui');

Page(Object.assign({}, simui.Collapse, {
  data: {
    menu: [{
      title: '综合排序',
    }, {
      title: '销量优先',
    }, {
      title: '价格从低到高',
    }, {
      title: '价格从高到低'
    }]
  },
  onLoad: function (options) {
    
  },
  showCollapse() {
    this.openSimCollapse({
      menu: this.data.menu
    });
  },
  showCollapseBySetTop() {
    this.openSimCollapse({
      menu: this.data.menu,
      top: '70rpx'
    });
  },
  handleSimCollapseMenuTap(e) {  
    console.log('你点击了"' + this.data.menu[e.currentTarget.dataset.index].title + '"');
    wx.showToast({
      title: '你点击了"' + this.data.menu[e.currentTarget.dataset.index].title + '"',
      duration: 2300
    })
    this.closeSimCollapse();
  }
}))