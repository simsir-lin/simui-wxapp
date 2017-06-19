var SIMTOPTIPTYPE = ['default', 'success', 'error', 'info', 'warning'];

module.exports = {
  showSimTopTip(text, options) {
    let simTopTip = this.data.simTopTip || {};

    if (typeof options === 'string') {
      let isexist = SIMTOPTIPTYPE.indexOf(options);
      if (isexist < 0) {
        options = 'default';
      }      
      options = {
        type: options,
        duration: 2500
      };
    }
    if (typeof options === 'number') {
      options = {
        type: 'default',
        duration: options
      };
    }

    options = Object.assign({
      duration: 2500,
      type: 'default'
    }, options);

    if (simTopTip.timer) {
      clearTimeout(simTopTip.timer);
      simTopTip.timer = undefined;
    }

    let timer = setTimeout(() => {
      let t = this.data.simTopTip || {};
      t.show = false;
      this.setData({
        simTopTip: t
      });
    }, options.duration);

    this.setData({
      simTopTip: {
        show: true,
        text: text,
        timer: timer,
        type: options.type
      }
    });
  }
}
