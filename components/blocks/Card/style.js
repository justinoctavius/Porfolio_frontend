import styled from 'styled-components';
import { themes } from '../../../constants';
import { Block } from '../../../styles';

const CardStyled = styled(Block)`
  .card_image {
    img {
      border-radius: ${themes.radius.r1};
      height: 100%;
    }
  }

  .card_body {
    display: grid;
    grid-template-rows: 3em 1fr 1em;

    .card_description {
      scrollbar-width: none;
    }

    & > div:nth-child(3) {
      text-align: right;
      time {
        color: ${themes.colors.primary};
      }
    }
  }
`;

export default CardStyled;
