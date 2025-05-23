const { MQ_BREAKPOINT_MAP } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_BreakInside() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    breaks:      ['auto', 'avoid', 'avoid-page', 'avoid-column']
  };

  const cssContent = getCSSContent('layout/break-inside', params);

  clearCSS('layout/break-inside');
  appendCSS('layout/break-inside', cssContent);
}

module.exports = {
  generateCSS_BreakInside
};
