const MQ_BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const MQ_BREAKPOINT_MAP = {
  'xs':  0,
  'sm':  576,
  'md':  768,
  'lg':  992,
  'xl':  1200,
  'xxl': 1400
};
const SPACERS = [0, 1, 2, 3, 4, 5, 6];
const COLUMNS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const PERCENTS_INCREASE = 5;
const PERCENTS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
const BREAKS = [
  'all',
  'auto',
  'avoid',
  'avoid-page',
  'page',
  'left',
  'right',
  'column'
];

module.exports = {
  MQ_BREAKPOINTS,
  MQ_BREAKPOINT_MAP,
  SPACERS,
  COLUMNS,
  PERCENTS_INCREASE,
  PERCENTS,
  BREAKS
};
