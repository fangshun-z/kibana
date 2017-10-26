import { advancedFilter } from './advanced_filter';
import { debug } from './debug';
import { grid } from './grid';
import { image } from './image';
import { markdown } from './markdown';
import { pie } from './pie';
import { plot } from './plot';
import { table } from './table';
import { timeFilter } from './time_filter';

export const elementSpecs = [
  advancedFilter,
  timeFilter,
  debug,
  grid,
  image,
  markdown,
  plot,
  pie,
  table,
];
