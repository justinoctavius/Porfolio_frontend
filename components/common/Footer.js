import { A, Block } from '../../styles';
import Link from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faBusinessTime,
  faHouseUser,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <Block
      bg={'primary'}
      position={'sticky'}
      bottom={'0px'}
      width={'100%'}
      zIndex1
    >
      <Block p1 display={'flex'} justify={'space-around'}>
        <Link bold size2 center href="/">
          <FontAwesomeIcon icon={faHouseUser} />
          <br />
          Home
        </Link>
        <Link bold size2 center href="/projects">
          <FontAwesomeIcon icon={faProjectDiagram} />
          <br />
          Projects
        </Link>
        <Link bold size2 center href="/works">
          <FontAwesomeIcon icon={faBusinessTime} />
          <br />
          Experiences
        </Link>
        <Link bold size2 center href="/studies">
          <FontAwesomeIcon icon={faBrain} />
          <br />
          Studies
        </Link>
      </Block>
    </Block>
  );
};

const items = [
  { name: 'Home', url: '/', icon: faHouseUser },
  { name: 'Projects', url: '/projects', icon: faProjectDiagram },
  { name: 'Experiences', url: '/works', icon: faBusinessTime },
  { name: 'Studies', url: '/studies', icon: faBrain },
];

export default Footer;
