import { themes } from '../../constants';

const { colors } = themes;

const borderWidth = ({ bWidth, border }) => {
  return (bWidth && bWidth) || (border && '1px');
};

const borderStyle = ({
  solid,
  dashed,
  dotted,
  double,
  groove,
  ridge,
  border,
}) => {
  return (
    (dashed && 'dashed') ||
    (dotted && 'dotted') ||
    (double && 'double') ||
    (groove && 'groove') ||
    (ridge && 'ridge') ||
    (solid && 'solid') ||
    (border && 'solid')
  );
};

const borderColor = ({ bColor }) => {
  return colors[bColor] || bColor;
};

const radius = ({ radius, radius1, radius2, radius3 }) => {
  return (
    (radius1 && themes.radius.r1) ||
    (radius2 && themes.radius.r2) ||
    (radius3 && themes.radius.r3) ||
    (radius && radius + 'em')
  );
};

export { borderColor, borderStyle, borderWidth, radius };
