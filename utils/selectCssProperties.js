import { themes } from '../constants';

const { padding, margin, colors } = themes;

const select = {};

//position
select.align = ({ right, center }) => {
  return (right && 'right') || (center && 'center');
};
select.zIndex = ({
  zNIndex1,
  zNIndex2,
  zNIndex3,
  zIndex1,
  zIndex2,
  zIndex3,
}) => {
  return (
    (zNIndex1 && -9) ||
    (zNIndex2 && -99) ||
    (zNIndex3 && -999) ||
    (zIndex1 && 9) ||
    (zIndex2 && 99) ||
    (zIndex3 && 999)
  );
};
//layout
select.padding = ({ p1, p2, p3 }) => {
  return (p1 && padding.p1) || (p2 && padding.p2) || (p3 && padding.p3);
};
select.margin = ({ m1, m2, m3 }) => {
  return (m1 && margin.m1) || (m2 && margin.m2) || (m3 && margin.m3);
};
select.border = ({ border }) => {
  return `${colors[border]} 1px solid`;
};
select.radius = ({ radius, radius1, radius2, radius3 }) => {
  return (
    (radius1 && themes.radius.r1) ||
    (radius2 && themes.radius.r2) ||
    (radius3 && themes.radius.r3) ||
    (radius && radius + 'em')
  );
};
//text
select.bold = ({ bold }) => {
  return bold && 'bold';
};
select.size = ({ size1, size2, size3, size4, size }) => {
  const { h1, h2, p, strong } = themes.sizes;
  return (
    (size4 && h1) ||
    (size3 && h2) ||
    (size2 && p) ||
    (size1 && strong) ||
    (size && size)
  );
};
select.overflow = ({ hidden, scroll }) => {
  return (hidden && 'hidden') || (scroll && 'scroll');
};
select.cursor = ({ pointer }) => {
  return pointer && 'pointer';
};
//colors
select.background = ({ bg, gradient }) => {
  const gradientStyles = `linear-gradient(90deg, ${themes.colors.primary} 50%, ${themes.colors.secondary} 50%);`;
  const themeColor = bg && themes.colors[`${bg}`] ? themes.colors[`${bg}`] : bg;
  return (gradient && gradientStyles) || themeColor;
};
select.color = ({ primary, third, black, customColor }) => {
  return (
    (primary && colors.primary) ||
    (third && colors.third) ||
    (black && colors.black) ||
    (customColor && colors[customColor] ? colors[customColor] : customColor) ||
    colors.secondary
  );
};

export default select;
