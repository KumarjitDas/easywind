const {MQ_BREAKPOINT_MAP} = require('../globals');
const {appendCSS, getCSSContent, clearCSS} = require('../utility');


function generateCSS_AspectRatio() {
  const aspectRatioList = [[2, 1], [4, 3], [16, 9], [18, 9], [21, 9], [32, 9], [3, 2], [5, 4], [7, 5]];

  aspectRatioList.push(...aspectRatioList.map(([w, h]) => [h, w]));

  const params = {
    breakPoints:  MQ_BREAKPOINT_MAP,
    aspectRatios: aspectRatioList
  };

  const cssContent = getCSSContent('layout/aspect-ratio', params);

  clearCSS('layout/aspect-ratio');
  appendCSS('layout/aspect-ratio', cssContent);
}

module.exports = {
  generateCSS_AspectRatio
};
