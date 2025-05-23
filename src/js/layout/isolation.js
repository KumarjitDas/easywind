const { MQ_BREAKPOINT_MAP } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_Isolation() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP
  };

  const cssContent = getCSSContent('layout/isolation', params);

  clearCSS('layout/isolation');
  appendCSS('layout/isolation', cssContent);
}

module.exports = {
  generateCSS_Isolation
};
