import { Block, H1, P } from '../../../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faRocket,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  return (
    <Block p3 grid height="100%" spaceAround style={{ textAlign: 'center' }}>
      <Block m1>
        <H1>
          <FontAwesomeIcon icon={faTachometerAlt} /> <br />
          Fast
        </H1>
        <br />
        <P>Fast load times and lag free interaction, my highest priority.</P>
      </Block>
      <Block m1>
        <H1>
          <FontAwesomeIcon icon={faMobile} /> <br />
          Responsive
        </H1>
        <br />
        <P>My layouts will work on any device, big or small.</P>
      </Block>
      <Block m1>
        <H1>
          <FontAwesomeIcon icon={faRocket} /> <br />
          Dynamic
        </H1>
        <br />
        <P>
          Websites don't have to be static, I love making pages come to life.
        </P>
      </Block>
    </Block>
  );
};

export default HomeScreen;
