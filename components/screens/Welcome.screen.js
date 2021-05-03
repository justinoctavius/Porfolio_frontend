import { Block, H1 } from '../../styles';
import { P, Span } from '../../styles';

const WelcomeScreen = () => {
  return (
    <Block gradient flex center middle height="100%">
      <Block>
        <H1 center size={'15vw'}>
          Wel
          <Span third>c</Span>
          <Span primary>ome</Span>
        </H1>
        <Block flex spaceBetween>
          <P>Making awesome</P>
          <P primary>webs every day</P>
        </Block>
      </Block>
    </Block>
  );
};

export default WelcomeScreen;
