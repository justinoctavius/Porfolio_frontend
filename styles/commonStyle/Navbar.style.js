import styled from 'styled-components';
import { themes } from '../../constants';
import Block from './Block.style';

const navbarProperties = {};

const layoutXYPropsActions = (vertical, horizontal, layout) => {
  if (layout == 'top' || layout == 'bottom') {
    return horizontal;
  } else {
    return vertical;
  }
};

const layoutPropsActions = (top, left, right, bottom, layout) => {
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

navbarProperties.height = ({ layout }) => {
  return layoutXYPropsActions('100vmax', 'min-content', layout);
};

navbarProperties.width = ({ layout }) => {
  return layoutXYPropsActions('min-content', '100vw', layout);
};

navbarProperties.direction = ({ layout }) => {
  return layoutXYPropsActions('column', 'row', layout);
};

navbarProperties.top = ({ layout, show }) => {
  const px = show ? '0px' : '-100%';
  return layoutPropsActions(px, '0px', 'auto', 'auto', layout);
};

navbarProperties.right = ({ layout, show }) => {
  const px = show ? '0px' : '-100%';
  return layoutPropsActions('0px', 'auto', px, 'auto', layout);
};

navbarProperties.bottom = ({ layout, show }) => {
  const px = show ? '0px' : '-100%';
  return layoutPropsActions('auto', '0px', 'auto', px, layout);
};

navbarProperties.left = ({ layout, show }) => {
  const px = show ? '0px' : '-100%';
  return layoutPropsActions('0px', px, 'auto', 'auto', layout);
};

const NavbarStyled = styled(Block)`
  position: sticky;
  bottom: 0px;

  & > div:nth-child(1) {
    position: absolute;
    top: ${({ layout }) => navbarProperties.top({ layout, show: true })};
    right: ${({ layout }) => navbarProperties.right({ layout, show: true })};
    left: ${({ layout }) => navbarProperties.left({ layout, show: true })};
    bottom: ${({ layout }) => navbarProperties.bottom({ layout, show: true })};
  }
  & > div:nth-child(2) {
    position: absolute;
    max-width: min-content;
    top: ${navbarProperties.top};
    right: ${navbarProperties.right};
    left: ${navbarProperties.left};
    bottom: ${navbarProperties.bottom};
    overflow: scroll;

    & > div {
      display: flex;
      flex-direction: ${navbarProperties.direction};
      justify-content: space-between;
      align-items: center;
      text-align: center;
      padding: ${themes.padding.p1};
      height: ${navbarProperties.height};
      width: ${navbarProperties.width};
    }

    transition: 0.5s;
  }

  @media (min-width: ${themes.screen.s2}) {
    & > div:nth-child(1) {
      display: none;
    }
    & > div:nth-child(2) {
      div {
        & > div:nth-child(1) {
          display: none;
        }
      }
    }
  }
`;

export default NavbarStyled;
