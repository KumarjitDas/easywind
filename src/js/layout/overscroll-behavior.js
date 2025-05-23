const { MQ_BREAKPOINT_MAP, SPACERS, PERCENTS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_OverscrollBehavior() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    behaviors:   ['auto', 'contain', 'none']
  };

  const cssContent = getCSSContent('layout/overscroll-behavior', params);

  clearCSS('layout/overscroll-behavior');
  appendCSS('layout/overscroll-behavior', cssContent);
}

module.exports = {
  generateCSS_OverscrollBehavior
};
