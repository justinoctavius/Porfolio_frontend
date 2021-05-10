import styled from 'styled-components';
import { themes } from '../../../../constants';
import { Block } from '../../../../styles';
import { layoutActions } from '../../../../utils';

const layoutProperties = {};

layoutProperties.height = ({ layout }) => {
  return layoutActions.XYDirections('100em', 'min-content', layout);
};

layoutProperties.width = ({ layout }) => {
  return layoutActions.XYDirections('min-content', '100vw', layout);
};

layoutProperties.direction = ({ layout }) => {
  return layoutActions.XYDirections('column', 'row', layout);
};

layoutProperties.top = ({ layout, show }) => {
  const px = show ? '0px' : '-100%';
  return layoutActions.AllDirections(px, '0px', 'auto', 'auto', layout);
};

layoutProperties.right = ({ layout, show }) => {
  const px = show ? '0px' : '-100%';
  return layoutActions.AllDirections('0px', 'auto', px, 'auto', layout);
};

layoutProperties.bottom = ({ layout, show }) => {
  const px = show ? '0px' : '-100%';
  return layoutActions.AllDirections('auto', 'auto', 'auto', px, layout);
};

layoutProperties.left = ({ layout, show }) => {
  const px = show ? '0px' : '-100%';
  return layoutActions.AllDirections('0px', px, 'auto', 'auto', layout);
};

const NavbarStyled = styled(Block)`
  & > div:nth-child(1) {
    z-index: 99;
    position: absolute;
    bottom: 0px;
    padding: ${themes.padding.p1};
  }
  .items_box {
    z-index: 99;
    position: absolute;
    max-height: 100vh;
    max-width: min-content;
    top: ${layoutProperties.top};
    right: ${layoutProperties.right};
    left: ${layoutProperties.left};
    bottom: ${layoutProperties.bottom};
    overflow-y: scroll;
    overflow-x: hidden;
    transition: 0.7s;
    .items {
      display: flex;
      flex-direction: ${layoutProperties.direction};
      justify-content: space-around;
      align-items: center;
      text-align: center;
      padding: ${themes.padding.p1};
      height: ${layoutProperties.height};
      width: ${layoutProperties.width};
    }
  }

  .items_box::-webkit-scrollbar {
    display: ${({ layout }) => layout == 'bottom' && 'none'};
  }

  @media (min-width: ${themes.screen.s2}) {
    .showBtn {
      display: none;
    }
    .items_box {
      position: static;
    }
  }
`;

export default NavbarStyled;
