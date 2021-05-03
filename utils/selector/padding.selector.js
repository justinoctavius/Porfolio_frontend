import { themes } from '../../constants';

const padding = ({ p1, p2, p3 }) => {
  return (
    (p1 && themes.padding.p1) ||
    (p2 && themes.padding.p2) ||
    (p3 && themes.padding.p3)
  );
};

const paddingTop = ({ pt1, pt2, pt3 }) => {
  return (
    (pt1 && themes.padding.p1) ||
    (pt2 && themes.padding.p2) ||
    (pt3 && themes.padding.p3)
  );
};

const paddingLeft = ({ pl1, pl2, pl3 }) => {
  return (
    (pl1 && themes.padding.p1) ||
    (pl2 && themes.padding.p2) ||
    (pl3 && themes.padding.p3)
  );
};
const paddingRight = ({ pr1, pr2, pr3 }) => {
  return (
    (pr1 && themes.padding.p1) ||
    (pr2 && themes.padding.p2) ||
    (pr3 && themes.padding.p3)
  );
};
const paddingBottom = ({ pb1, pb2, pb3 }) => {
  return (
    (pb1 && themes.padding.p1) ||
    (pb2 && themes.padding.p2) ||
    (pb3 && themes.padding.p3)
  );
};

export { padding, paddingBottom, paddingLeft, paddingRight, paddingTop };
