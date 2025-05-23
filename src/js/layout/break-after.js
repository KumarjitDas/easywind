const { MQ_BREAKPOINT_MAP, BREAKS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_BreakAfter() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    breaks:      BREAKS
  };

  const cssContent = getCSSContent('layout/break-after', params);

  clearCSS('layout/break-after');
  appendCSS('layout/break-after', cssContent);
}

module.exports = {
  generateCSS_BreakAfter
};
