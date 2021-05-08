import { A, Block, H2, Strong } from '../../../../styles';
import { Button, Link, Title } from '../../../common';
import { themes } from '../../../../constants';
import ContactScreenStyled from './style';

const ContactScreen = () => {
  return (
    <Block width="100%" height="100%" bg={'primary'} flex center>
      <ContactScreenStyled
        bg={`${themes.colors.third + '55'}`}
        flex
        fColumn
        middle
        border
        bColor="third"
        radius2
        height="80%"
        width="35em"
      >
        <Block radius3 flex fColumn middle>
          <Block>
            <Title center>Contact me</Title>
          </Block>
          <Block flex spaceBetween>
            <Block className="link" flex fColumn middle>
              <Link href="mailto:justinoctavio@gmail.com">
                <img src="/email_icon.png" />
              </Link>
              <Strong>Email</Strong>
            </Block>
            <Block className="link" flex fColumn middle>
              <Link href="https://www.linkedin.com/in/justin-octavio-col%C3%B3n-solano-080a541a3/">
                <img src="/linkedin_icon.png" />
              </Link>
              <Strong>Linked-in</Strong>
            </Block>
            <Block className="link" flex fColumn middle>
              <Link href="https://github.com/justinoctavius">
                <img src="/github_icon.png" />
              </Link>
              <Strong>Github</Strong>
            </Block>
          </Block>
          <Button mt2 color="hover">
            <Link notHover primary href="mailto:justinoctavio@gmail.com">
              Send me a message
            </Link>
          </Button>
        </Block>
        <Block flex center className="contact_image">
          <img src="./contact_img.png" />
        </Block>
      </ContactScreenStyled>
    </Block>
  );
};

export default ContactScreen;
