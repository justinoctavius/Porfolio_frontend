import { css } from 'styled-components';
import { select } from '../utils/';

export const sizes = css`
  max-height: ${({ maxH }) => maxH};
  max-width: ${({ maxW }) => maxW};
  min-height: ${({ minH }) => minH};
  min-width: ${({ minW }) => minW};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export const layouts = css`
  display: ${select.display};
  justify-content: ${select.justify};
  align-items: ${select.align};
  flex-direction: ${select.direction};
  grid-template-columns: ${select.cols};
  grid-template-rows: ${select.rows};
  overflow: ${select.overflow};
`;

export const positions = css`
  position: ${select.position};
  top: ${select.top};
  right: ${select.right};
  bottom: ${select.bottom};
  left: ${select.left};
  z-index: ${select.zIndex};
`;

export const colors = css`
  background: ${select.background};
  color: ${select.color};
`;

export const paddings = css`
  padding: ${select.padding};
  padding-top: ${select.paddingTop};
  padding-bottom: ${select.paddingBottom};
  padding-left: ${select.paddingLeft};
  padding-right: ${select.paddingRight};
`;

export const margins = css`
  margin: ${select.margin};
  margin-top: ${select.marginTop};
  margin-bottom: ${select.marginBottom};
  margin-left: ${select.marginLeft};
  margin-right: ${select.marginRight};
`;

export const borders = css`
  border-width: ${select.borderWidth};
  border-style: ${select.borderStyle};
  border-color: ${select.borderColor};
  border-radius: ${select.radius};
`;

export const texts = css`
  font-size: ${select.fontSize};
  text-align: ${select.alignText};
  font-weight: ${select.bold};
  cursor: ${select.cursor};
`;
