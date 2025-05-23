const { MQ_BREAKPOINT_MAP, SPACERS, PERCENTS } = require('../globals');
const { appendCSS, getCSSContent, clearCSS } = require('../utility');


function generateCSS_TopRightBottomLeft() {
  const spacers = Array.from(new Set([...SPACERS, ...SPACERS.map((x) => -x)]));
  const percents = Array.from(new Set([...PERCENTS, ...PERCENTS.map((x) => -x)]));

  const params = {
    breakPoints: MQ_BREAKPOINT_MAP,
    spacers, percents
  };

  const cssContent = getCSSContent('layout/top-right-bottom-left', params);

  clearCSS('layout/top-right-bottom-left');
  appendCSS('layout/top-right-bottom-left', cssContent);
}

module.exports = {
  generateCSS_TopRightBottomLeft
};
