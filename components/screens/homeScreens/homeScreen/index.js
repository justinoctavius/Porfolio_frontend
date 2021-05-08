import { Block, H1, P } from '../../../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faRocket,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import HomeStyled from './style';

const HomeScreen = () => {
  return (
    <HomeStyled
      p2
      flex
      height="100%"
      spaceAround
      middle
      style={{ textAlign: 'center' }}
    >
      {datas &&
        datas.map((data) => (
          <Block m1 border bColor="third" radius2 p3 width="30em" height="50em">
            <Block>
              <H1>
                <FontAwesomeIcon icon={data.icon} /> <br />
                {data.title}
              </H1>
            </Block>
            <Block m1>
              <P size3>{data.text}</P>
            </Block>
            <Block>
              <img src={data.img} />
            </Block>
          </Block>
        ))}
    </HomeStyled>
  );
};

const datas = [
  {
    title: 'Fast',
    text: 'Fast load times and lag free interaction, my highest priority.',
    icon: faTachometerAlt,
    img: './fast_design.png',
  },
  {
    title: 'Responsive',
    text: 'My layouts will work on any device, big or small',
    icon: faMobile,
    img: './responsive_design.png',
  },
  {
    title: 'Dynamic',
    text: "Websites don't have to be static, I love making pages come to life.",
    icon: faRocket,
    img: './dynamic_design.png',
  },
];

export default HomeScreen;
