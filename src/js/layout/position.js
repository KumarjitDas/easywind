const { MQ_BREAKPOINT_MAP, SPACERS, PERCENTS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_Position() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    positions:   ['static', 'fixed', 'absolute', 'relative', 'sticky']
  };

  const cssContent = getCSSContent('layout/position', params);

  clearCSS('layout/position');
  appendCSS('layout/position', cssContent);
}

module.exports = {
  generateCSS_Position
};
