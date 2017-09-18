module.exports = {
  openSimCollapse(options) {
    let simCollapse = this.data.simCollapse || {
      visible: false,
    };        

    wx.createSelectorQuery().select('#sim-collapse').boundingClientRect((rect) => {
      let defaultOption = {
        menuHeight: 40,
        menu: [],
        top: rect.top + 'px',
        height: '160px'
      };
      if (options) {
        defaultOption = Object.assign(defaultOption, options);
      }

      simCollapse.menu = defaultOption.menu || [];
      simCollapse.height = defaultOption.height;
      simCollapse.menuHeight = defaultOption.menuHeight;
      simCollapse.top = defaultOption.top;
      
      simCollapse.visible = true;

      this.setData({
        simCollapse: simCollapse
      });
    }).exec();    
  },
  closeSimCollapse() {
    this.setData({
      simCollapse: {
        visible: false
      }
    });
  }
}