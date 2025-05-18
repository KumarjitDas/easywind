const fs = require('fs');
const path = require('path');

const MQ_BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const MQ_BREAKPOINT_MAP = {
  'xs':  0,
  'sm':  576,
  'md':  768,
  'lg':  992,
  'xl':  1200,
  'xxl': 1400
};
const SPACER_COUNT = 7;
const TOTAL_COLUMNS_COUNT = 12;
const PERCENT_INCREASE = 5;
const CONTENT_WIDTHS = ['min', 'max', 'fit'];
const BREAK_TYPES = ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];

const GENERATED_DIR = path.join(__dirname, '..', 'generated');

if (!fs.existsSync(GENERATED_DIR)) {
  fs.mkdirSync(GENERATED_DIR);
}

const OUTPUT_FILE = path.join(GENERATED_DIR, 'generated.css');

fs.writeFileSync(OUTPUT_FILE, '', 'utf8');

/**
 * Append CSS to the generated.css file.
 * @param {string} cssContent - The CSS content to append.
 * @param {string} property - The target CSS property.
 */
function appendCSS(cssContent, property) {
  fs.appendFileSync(OUTPUT_FILE, cssContent, 'utf8');

  if (property) {
    console.log(`Generated CSS for '${property}' saved to ${OUTPUT_FILE}`);
  }
}

/*
 * LAYOUT
 */

function generateCSS_AspectRatio() {
  const aspectRatioList = [[2, 1], [4, 3], [16, 9], [18, 9], [21, 9], [32, 9], [3, 2], [5, 4], [7, 5]];

  aspectRatioList.push(...aspectRatioList.map(([w, h]) => [h, w]));

  const generate = (mq) => {
    const mqStr = mq ? `-${mq}` : '';

    let cssContent = mq === 'xs' ? `
  .aspect-auto,
  .aspect-auto${mqStr} {
    aspect-ratio: auto;
  }
  .aspect-square,
  .aspect-square${mqStr},
  .aspect-1\\/1,
  .aspect-1\\/1${mqStr} {
    aspect-ratio: 1 / 1;
  }
  .aspect-video,
  .aspect-video${mqStr} {
    aspect-ratio: var(--ew-aspect-ratio-video);
  }` : `
  .aspect-auto${mqStr} {
    aspect-ratio: auto;
  }
  .aspect-square${mqStr},
  .aspect-1\\/1${mqStr} {
    aspect-ratio: 1 / 1;
  }
  .aspect-video${mqStr} {
    aspect-ratio: var(--ew-aspect-ratio-video);
  }`;

    for (const [w, h] of aspectRatioList) {
      cssContent += mq === 'xs' ? `
  .aspect-${w}\\/${h},
  .aspect-${w}\\/${h}${mqStr} {
    aspect-ratio: ${w} / ${h};
  }\n` : `
  .aspect-${w}\\/${h}${mqStr} {
    aspect-ratio: ${w} / ${h};
  }\n`;
    }

    return cssContent;
  };

  let cssContent = '';

  for (const mq of MQ_BREAKPOINTS) {
    cssContent += mq !== 'xs' ? `\n@media (min-width: ${MQ_BREAKPOINT_MAP[mq]}px) {\n` : '';
    cssContent += generate(mq);
    cssContent += mq !== 'xs' ? '\n}\n' : '';
  }

  appendCSS(cssContent, 'aspect-ratio');
}

function generateCSS_Columns() {
  const generate = (mq) => {
    const mqStr = mq ? `-${mq}` : '';

    let cssContent = mq === 'xs' ? `
  .column-width-auto,
  .column-width-auto${mqStr} {
    column-width: auto;
  }` : `
  .column-width-auto${mqStr} {
    column-width: auto;
  }`;

    for (const cw of CONTENT_WIDTHS) {
      cssContent += mq === 'xs' ? `
  .column-width-${cw},
  .column-width-${cw}${mqStr} {
    column-width: ${cw}-content;
  }` : `
  .column-width-${cw}${mqStr} {
    column-width: ${cw}-content;
  }`;
    }

    for (let i = 0; i < SPACER_COUNT; ++i) {
      cssContent += mq === 'xs' ? `
  .column-width-${i},
  .column-width-${i}${mqStr} {
    column-width: var(--ew-spacer-${i});
  }` : `
  .column-width-${i}${mqStr} {
    column-width: var(--ew-spacer-${i});
  }`;
    }

    for (let i = 0; i < SPACER_COUNT; ++i) {
      cssContent += mq === 'xs' ? `
  .column-gap-${i},
  .column-gap-${i}${mqStr} {
    column-gap: var(--ew-spacer-${i});
  }` : `
  .column-gap-${i}${mqStr} {
    column-gap: var(--ew-spacer-${i});
  }`;
    }

    for (let i = PERCENT_INCREASE; i <= 100; i += PERCENT_INCREASE) {
      cssContent += mq === 'xs' ? `
  .column-gap-${i}per,
  .column-gap-${i}per${mqStr} {
    column-gap: ${i}%;
  }` : `
  .column-gap-${i}per${mqStr} {
    column-gap: ${i}%;
  }`;
    }

    for (let i = 1; i <= TOTAL_COLUMNS_COUNT; ++i) {
      cssContent += mq === 'xs' ? `
  .column-count-${i},
  .column-count-${i}${mqStr} {
    column-count: ${i};
  }` : `
  .column-count-${i}${mqStr} {
    column-count: ${i};
  }`;
    }

    return cssContent;
  };

  let cssContent = '';

  for (const mq of MQ_BREAKPOINTS) {
    cssContent += mq !== 'xs' ? `\n@media (min-width: ${MQ_BREAKPOINT_MAP[mq]}px) {\n` : '';
    cssContent += generate(mq);
    cssContent += mq !== 'xs' ? '\n}\n' : '';
  }

  appendCSS(cssContent, 'columns (column-width, column-count, column-gap)');
}

function generateCSS_BreakAfter() {
  const generate = (mq) => {
    const mqStr = mq ? `-${mq}` : '';

    let cssContent = mq === 'xs' ? `
  /*noinspection CssInvalidPropertyValue,CssOverwrittenProperties*/
  .break-after-all,
  .break-after-all${mqStr} {
    break-after: always;
    break-after: all;
  }\n` : `
  /*noinspection CssInvalidPropertyValue,CssOverwrittenProperties*/
  .break-after-all${mqStr} {
    break-after: always;
    break-after: all;
  }\n`;

    for (const bt of BREAK_TYPES) {
      if (bt === 'all') {
        continue;
      }

      cssContent += mq === 'xs' ? `
  .break-after-${bt},
  .break-after-${bt}${mqStr} {
    break-after: ${bt};
  }\n` : `
  .break-after-${bt}${mqStr} {
    break-after: ${bt};
  }\n`;
    }

    return cssContent;
  };

  let cssContent = '';

  for (const mq of MQ_BREAKPOINTS) {
    cssContent += mq !== 'xs' ? `\n@media (min-width: ${MQ_BREAKPOINT_MAP[mq]}px) {\n` : '';
    cssContent += generate(mq);
    cssContent += mq !== 'xs' ? '\n}\n' : '';
  }

  appendCSS(cssContent, 'break-after');
}

function generateCSS_BreakBefore() {
  const generate = (mq) => {
    const mqStr = mq ? `-${mq}` : '';

    let cssContent = mq === 'xs' ? `
  /*noinspection CssInvalidPropertyValue,CssOverwrittenProperties*/
  .break-before-all,
  .break-before-all${mqStr} {
    break-before: always;
    break-before: all;
  }\n` : `
  /*noinspection CssInvalidPropertyValue,CssOverwrittenProperties*/
  .break-before-all${mqStr} {
    break-before: always;
    break-before: all;
  }\n`;

    for (const bt of BREAK_TYPES) {
      if (bt === 'all') {
        continue;
      }

      cssContent += mq === 'xs' ? `
  .break-before-${bt},
  .break-before-${bt}${mqStr} {
    break-before: ${bt};
  }\n` : `
  .break-before-${bt}${mqStr} {
    break-before: ${bt};
  }\n`;
    }

    return cssContent;
  };

  let cssContent = '';

  for (const mq of MQ_BREAKPOINTS) {
    cssContent += mq !== 'xs' ? `\n@media (min-width: ${MQ_BREAKPOINT_MAP[mq]}px) {\n` : '';
    cssContent += generate(mq);
    cssContent += mq !== 'xs' ? '\n}\n' : '';
  }

  appendCSS(cssContent, 'break-before');
}

function generateCSS_BreakInside() {
  const generate = (mq) => {
    const mqStr = mq ? `-${mq}` : '';
    const break_types = ['auto', 'avoid', 'avoid-page', 'avoid-column'];
    let cssContent = '';

    for (const bt of break_types) {
      cssContent += mq === 'xs' ? `
  .break-inside-${bt},
  .break-inside-${bt}${mqStr} {
    break-inside: ${bt};
  }\n` : `
  .break-inside-${bt}${mqStr} {
    break-inside: ${bt};
  }\n`;
    }

    return cssContent;
  };

  let cssContent = '';

  for (const mq of MQ_BREAKPOINTS) {
    cssContent += mq !== 'xs' ? `\n@media (min-width: ${MQ_BREAKPOINT_MAP[mq]}px) {\n` : '';
    cssContent += generate(mq);
    cssContent += mq !== 'xs' ? '\n}\n' : '';
  }

  appendCSS(cssContent, 'break-inside');
}

function generateCSS_BoxDecorationBreak() {
  const generate = (mq) => {
    const mqStr = mq ? `-${mq}` : '';
    const box_decor_breaks = ['clone', 'slice'];
    let cssContent = '';

    for (const bt of box_decor_breaks) {
      cssContent += mq === 'xs' ? `
  .box-decoration-${bt},
  .box-decoration-${bt}${mqStr} {
    box-decoration-break: ${bt};
  }\n` : `
  .box-decoration-${bt}${mqStr} {
    box-decoration-break: ${bt};
  }\n`;
    }

    return cssContent;
  };

  let cssContent = '';

  for (const mq of MQ_BREAKPOINTS) {
    cssContent += mq !== 'xs' ? `\n@media (min-width: ${MQ_BREAKPOINT_MAP[mq]}px) {\n` : '';
    cssContent += generate(mq);
    cssContent += mq !== 'xs' ? '\n}\n' : '';
  }

  appendCSS(cssContent, 'box-decoration-break');
}

generateCSS_AspectRatio();
generateCSS_Columns();
generateCSS_BreakAfter();
generateCSS_BreakBefore();
generateCSS_BreakInside();
generateCSS_BoxDecorationBreak();
