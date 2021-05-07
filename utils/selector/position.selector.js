const position = ({ sticky, fixed, absolute, relative }) => {
  return (
    (sticky && 'sticky') ||
    (fixed && 'fixed') ||
    (absolute && 'absolute') ||
    (relative && 'relative')
  );
};

const top = ({ top }) => {
  return top && top;
};

const left = ({ left }) => {
  return left && left;
};

const right = ({ right }) => {
  return right && right;
};

const bottom = ({ bottom }) => {
  return bottom && bottom;
};

const zIndex = ({ zIndex1, zIndex2, zIndex3 }) => {
  return (zIndex1 && 9) || (zIndex2 && 99) || (zIndex3 && 999);
};

export { position, top, left, right, bottom, zIndex };
