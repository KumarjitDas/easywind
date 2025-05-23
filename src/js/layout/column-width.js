const { MQ_BREAKPOINT_MAP, SPACERS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_ColumnWidth() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    spacers:     SPACERS
  };

  const cssContent = getCSSContent('layout/column-width', params);

  clearCSS('layout/column-width');
  appendCSS('layout/column-width', cssContent);
}

module.exports = {
  generateCSS_ColumnWidth
};
