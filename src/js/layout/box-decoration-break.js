const { MQ_BREAKPOINT_MAP } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_BoxDecorationBreak() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    breaks:      ['clone', 'slice']
  };

  const cssContent = getCSSContent('layout/box-decoration-break', params);

  clearCSS('layout/box-decoration-break');
  appendCSS('layout/box-decoration-break', cssContent);
}

module.exports = {
  generateCSS_BoxDecorationBreak
};
