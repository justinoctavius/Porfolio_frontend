const justify = ({
  center,
  justifyEnd,
  justifyStart,
  justifyStretch,
  spaceBetween,
  spaceEvenly,
  spaceAround,
}) => {
  return (
    (center && 'center') ||
    (justifyEnd && 'flex-end') ||
    (justifyStretch && 'stretch') ||
    (justifyStart && 'start') ||
    (spaceBetween && 'space-between') ||
    (spaceEvenly && 'space-evenly') ||
    (spaceAround && 'space-around')
  );
};
const align = ({ alignEnd, alignStart, middle, alignStretch }) => {
  return (
    (alignEnd && 'flex-end') ||
    (alignStart && 'flex-start') ||
    (middle && 'center') ||
    (alignStretch && 'stretch')
  );
};
const display = ({ block, grid, flex, inline, inlineFlex, inlineBlock }) => {
  return (
    (block && 'block') ||
    (grid && 'grid') ||
    (flex && 'flex') ||
    (inline && 'inline') ||
    (inlineFlex && 'inline-flex') ||
    (inlineBlock && 'inline-block')
  );
};
const direction = ({ fRow, fColumn, fColumnReverse, fRowReverse }) => {
  return (
    (fRow && 'row') ||
    (fColumn && 'column') ||
    (fColumnReverse && 'column-reverse') ||
    (fRowReverse && 'row-reverse')
  );
};
const cols = ({ cols }) => {
  return cols && cols;
};
const rows = ({ rows }) => {
  return rows && rows;
};
const overflow = ({ overflowHidden, scroll }) => {
  return (overflowHidden && 'hidden') || (scroll && 'scroll');
};
const cursor = ({ pointer }) => {
  return pointer && 'pointer';
};
export { cols, rows, overflow, cursor, direction, align, display, justify };
