const { MQ_BREAKPOINT_MAP } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_Display() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP
  };

  const cssContent = getCSSContent('layout/display', params);

  clearCSS('layout/display');
  appendCSS('layout/display', cssContent);
}

module.exports = {
  generateCSS_Display
};
