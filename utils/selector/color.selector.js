import { themes } from '../../constants';

const { colors } = themes;

const background = ({ bg, gradient }) => {
  const gradientStyles = `linear-gradient(90deg, ${themes.colors.primary} 50%, ${themes.colors.secondary} 50%);`;
  const themeColor = bg && themes.colors[`${bg}`] ? themes.colors[`${bg}`] : bg;
  return (gradient && gradientStyles) || themeColor;
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
