import { themes } from '../../constants';

const { colors } = themes;

const background = ({ bg, gradient, gradient2 }) => {
  const gradientStyles = `linear-gradient(90deg, ${colors.primary} 50%, ${colors.secondary} 50%);`;
  const gradient2Styles = `linear-gradient(305deg, ${colors.third} 50%,${colors.secondary})`;
  const themeColor = bg && colors[`${bg}`] ? colors[`${bg}`] : bg;
  return (
    (gradient && gradientStyles) || (gradient2 && gradient2Styles) || themeColor
  );
};
const color = ({ primary, third, black, danger, customColor }) => {
  return (
    (primary && colors.primary) ||
    (third && colors.third) ||
    (black && colors.black) ||
    (danger && colors.danger) ||
    (customColor && colors[customColor] ? colors[customColor] : customColor) ||
    colors.secondary
  );
};

export { background, color };
