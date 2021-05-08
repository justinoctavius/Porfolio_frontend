import styled from 'styled-components';
import { themes } from '../../../../constants';
import { Block } from '../../../../styles';

const ContactScreenStyled = styled(Block)`
  overflow: hidden;
  .link {
    img {
      margin: 1em;
      width: 5em;
      height: 5em;
    }
  }
  .contact_image {
    position: relative;
    padding: 2em;
    overflow: hidden;
    img {
      height: 100%;
    }
  }

  @media (max-width: ${themes.screen.s4}) {
    width: 80%;
    .contact_image {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default ContactScreenStyled;
