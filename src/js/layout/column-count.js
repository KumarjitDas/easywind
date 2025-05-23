const { MQ_BREAKPOINT_MAP, COLUMNS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_ColumnCount() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    columns:     COLUMNS
  };

  const cssContent = getCSSContent('layout/column-count', params);

  clearCSS('layout/column-count');
  appendCSS('layout/column-count', cssContent);
}

module.exports = {
  generateCSS_ColumnCount
};
