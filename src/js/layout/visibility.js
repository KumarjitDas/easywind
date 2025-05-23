const { MQ_BREAKPOINT_MAP, SPACERS, PERCENTS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_Visibility() {
  const params = {
    breakPoints:  MQ_BREAKPOINT_MAP,
    visibilities: {
      'visible':   'visible',
      'invisible': 'hidden',
      'collapse':  'collapse'
    }
  };

  const cssContent = getCSSContent('layout/visibility', params);

  clearCSS('layout/visibility');
  appendCSS('layout/visibility', cssContent);
}

module.exports = {
  generateCSS_Visibility
};
