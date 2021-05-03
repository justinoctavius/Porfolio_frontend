import { themes } from '../../constants';

const bold = ({ bold }) => {
  return bold && 'bold';
};
const fontSize = ({ size1, size2, size3, size4, size }) => {
  const { h1, h2, p, strong } = themes.sizes;
  return (
    (size4 && h1) ||
    (size3 && h2) ||
    (size2 && p) ||
    (size1 && strong) ||
    (size && size)
  );
};

const alignText = ({ right, center }) => {
  return (right && 'right') || (center && 'center');
};

export { bold, fontSize, alignText };
