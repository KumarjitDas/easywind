const { MQ_BREAKPOINT_MAP, BREAKS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_BreakBefore() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    breaks:      BREAKS
  };

  const cssContent = getCSSContent('layout/break-before', params);

  clearCSS('layout/break-before');
  appendCSS('layout/break-before', cssContent);
}

module.exports = {
  generateCSS_BreakBefore
};
