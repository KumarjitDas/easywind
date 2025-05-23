const { MQ_BREAKPOINT_MAP, SPACERS, PERCENTS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_ObjectPosition() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    positions:   {
      'top-left':     'top left',
      'top':          'top',
      'top-right':    'top right',
      'left':         'left',
      'center':       'center',
      'right':        'right',
      'bottom-left':  'bottom left',
      'bottom':       'bottom',
      'bottom-right': 'bottom right'
    }
  };

  const cssContent = getCSSContent('layout/object-position', params);

  clearCSS('layout/object-position');
  appendCSS('layout/object-position', cssContent);
}

module.exports = {
  generateCSS_ObjectPosition
};
