import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLink,
  faMailBulk,
  faVoicemail,
} from '@fortawesome/free-solid-svg-icons';
import { A, Block, H2, Strong } from '../../../../styles';
import { Button, Link, Title } from '../../../common';
import { themes } from '../../../../constants';

const ContactScreen = () => {
  return (
    <Block width="100%" height="100%" bg={'primary'} flex center middle>
      <Block
        bg={`${themes.colors.third + '55'}`}
        flex
        fColumn
        middle
        border
        bColor="third"
        radius2
        height="60em"
        width="30em"
      >
        <Block p3 radius3 flex fColumn middle>
          <Block>
            <Title center>Contact me</Title>
          </Block>
          <Block flex fColumn>
            <Link size2 href="mailto:justinoctavio@gmail.com">
              Email: justinoctavio2001@gmail.com
            </Link>
            <Link
              mt2
              size2
              href="https://www.linkedin.com/in/justin-octavio-col%C3%B3n-solano-080a541a3/"
            >
              Linked-In: Justin octavio colon solano
            </Link>
            <Link mt2 size2 href="https://github.com/justinoctavius">
              Github: justinoctavius
            </Link>
          </Block>
          <Button mt2 color="third">
            <Link notHover href="mailto:justinoctavio@gmail.com">
              Send me a message
            </Link>
          </Button>
        </Block>
        <Block flex center>
          <img src="./contact_img.png" style={{ width: '80%' }} />
        </Block>
      </Block>
    </Block>
  );
};

export default ContactScreen;
