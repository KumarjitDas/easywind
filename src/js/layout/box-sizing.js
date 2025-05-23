const { MQ_BREAKPOINT_MAP } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_BoxSizing() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    sizings:     ['border-box', 'content-box']
  };

  const cssContent = getCSSContent('layout/box-sizing', params);

  clearCSS('layout/box-sizing');
  appendCSS('layout/box-sizing', cssContent);
}

module.exports = {
  generateCSS_BoxSizing
};
