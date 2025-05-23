const { MQ_BREAKPOINT_MAP, SPACERS, PERCENTS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_Overflow() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    overflows:   ['auto', 'hidden', 'clip', 'visible', 'scroll']
  };

  const cssContent = getCSSContent('layout/overflow', params);

  clearCSS('layout/overflow');
  appendCSS('layout/overflow', cssContent);
}

module.exports = {
  generateCSS_Overflow
};
