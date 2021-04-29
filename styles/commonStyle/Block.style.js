import styled from 'styled-components';
import { select } from '../../utils';

const Block = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${({ direction }) => direction};

  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  z-index: ${select.zIndex};

  background: ${select.background};

  padding: ${select.padding};
  margin: ${select.margin};

  border: ${select.border};

  border-radius: ${select.radius};

  height: ${({ height }) => height};
  width: ${({ width }) => width};

  overflow: ${select.overflow};
`;

export default Block;
