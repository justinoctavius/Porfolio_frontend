import { Block, H1 } from '../../styles';
import { P, Span } from '../../styles';

const WelcomeScreen = () => {
  return (
    <Block
      gradient
      display={'flex'}
      justify={'center'}
      align={'center'}
      height={'90vh'}
    >
      <Block>
        <H1 center size={'15vw'}>
          Wel
          <Span third>c</Span>
          <Span primary>ome</Span>
        </H1>
        <Block display={'flex'} justify={'space-between'}>
          <P>Making awesome</P>
          <P primary>webs every day</P>
        </Block>
      </Block>
    </Block>
  );
};

export default WelcomeScreen;
