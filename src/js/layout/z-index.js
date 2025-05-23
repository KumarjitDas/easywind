const { MQ_BREAKPOINT_MAP, SPACERS, PERCENTS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_ZIndex() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    indices:     Array.from({ length: 201 }, (_, idx) => idx - 100)
  };

  const cssContent = getCSSContent('layout/z-index', params);

  clearCSS('layout/z-index');
  appendCSS('layout/z-index', cssContent);
}

module.exports = {
  generateCSS_ZIndex
};
