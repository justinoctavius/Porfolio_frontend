import { themes } from '../../constants';

const margin = ({ m1, m2, m3 }) => {
  return (
    (m1 && themes.margin.m1) ||
    (m2 && themes.margin.m2) ||
    (m3 && themes.margin.m3)
  );
};

const marginTop = ({ mt1, mt2, mt3 }) => {
  return (
    (mt1 && themes.margin.m1) ||
    (mt2 && themes.margin.m2) ||
    (mt3 && themes.margin.m3)
  );
};

const marginLeft = ({ ml1, ml2, ml3 }) => {
  return (
    (ml1 && themes.margin.m1) ||
    (ml2 && themes.margin.m2) ||
    (ml3 && themes.margin.m3)
  );
};
const marginRight = ({ mr1, mr2, mr3 }) => {
  return (
    (mr1 && themes.margin.m1) ||
    (mr2 && themes.margin.m2) ||
    (mr3 && themes.margin.m3)
  );
};
const marginBottom = ({ mb1, mb2, mb3 }) => {
  return (
    (mb1 && themes.margin.m1) ||
    (mb2 && themes.margin.m2) ||
    (mb3 && themes.margin.m3)
  );
};

export { margin, marginTop, marginLeft, marginRight, marginBottom };
