import styled, { css } from 'styled-components';
import { themes } from '../../constants';
import { select } from '../../utils';

const text = css`
  color: ${select.color};
  font-size: ${select.size};
  text-align: ${select.align};
  font-weight: ${select.bold};
  cursor: ${select.cursor};
  padding: ${select.padding};
`;

export const H1 = styled.h1`
  font-size: ${themes.sizes.h1};
  ${text};
`;

export const H2 = styled.h2`
  font-size: ${themes.sizes.h2};
  ${text};
`;

export const P = styled.p`
  font-size: ${themes.sizes.p};
  ${text};
  overflow: ${select.overflow};
  max-height: ${({ maxH }) => maxH && maxH};
`;

export const Strong = styled.strong`
  font-size: ${themes.sizes.strong};
  font-weight: bold;
  ${text};
`;

export const Span = styled.span`
  ${text};
`;

export const A = styled.a`
  font-size: ${themes.sizes.strong};
  ${text};
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
`;
