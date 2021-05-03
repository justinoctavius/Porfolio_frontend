const layoutActions = {};

layoutActions.XYDirections = (vertical, horizontal, layout) => {
  if (layout == 'top' || layout == 'bottom') {
    return horizontal;
  } else {
    return vertical;
  }
};

layoutActions.AllDirections = (top, left, right, bottom, layout) => {
  switch (layout) {
    case 'top':
      return top;
    case 'left':
      return left;
    case 'right':
      return right;
    case 'bottom':
      return bottom;
    default:
      return left;
  }
};

export default layoutActions;
