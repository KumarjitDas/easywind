const { MQ_BREAKPOINT_MAP } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_Clear() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    clears:      ['right', 'left', 'both', 'inline-start', 'inline-end', 'none']
  };

  const cssContent = getCSSContent('layout/clear', params);

  clearCSS('layout/clear');
  appendCSS('layout/clear', cssContent);
}

module.exports = {
  generateCSS_Clear
};
