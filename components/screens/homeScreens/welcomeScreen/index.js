import { useEffect, useRef } from 'react';
import { Block, H1 } from '../../../../styles';
import { P, Span } from '../../../../styles';
import WelcomeScreenStyled from './style';

const WelcomeScreen = () => {
  return (
    <WelcomeScreenStyled gradient flex center middle height="100%" ref={screen}>
      <Block>
        <H1 center size={'15vw'}>
          Wel
          <Span third>c</Span>
          <Span primary>ome</Span>
        </H1>
        <Block flex spaceAround>
          <P>Making awesome</P>
          <P primary>webs every day</P>
        </Block>
      </Block>
    </WelcomeScreenStyled>
  );
};

export default WelcomeScreen;
