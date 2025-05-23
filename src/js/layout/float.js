const { MQ_BREAKPOINT_MAP } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_Float() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    floats:      ['right', 'left', 'inline-start', 'inline-end', 'none']
  };

  const cssContent = getCSSContent('layout/float', params);

  clearCSS('layout/float');
  appendCSS('layout/float', cssContent);
}

module.exports = {
  generateCSS_Float
};
