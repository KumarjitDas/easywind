const { MQ_BREAKPOINT_MAP, SPACERS, PERCENTS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_ColumnGap() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    spacers:     SPACERS,
    percents:    PERCENTS
  };

  const cssContent = getCSSContent('layout/column-gap', params);

  clearCSS('layout/column-gap');
  appendCSS('layout/column-gap', cssContent);
}

module.exports = {
  generateCSS_ColumnGap
};
