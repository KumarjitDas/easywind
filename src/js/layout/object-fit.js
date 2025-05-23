const { MQ_BREAKPOINT_MAP } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_ObjectFit() {
  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    fits:        ['contain', 'cover', 'fill', 'none', 'scale-down']
  };

  const cssContent = getCSSContent('layout/object-fit', params);

  clearCSS('layout/object-fit');
  appendCSS('layout/object-fit', cssContent);
}

module.exports = {
  generateCSS_ObjectFit
};
