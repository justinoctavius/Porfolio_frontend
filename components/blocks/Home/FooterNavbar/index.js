import {
  faBrain,
  faBusinessTime,
  faHouseUser,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import { Block } from '../../../../styles/';
import { Navbar } from '../../Navbar';

const FooterNavbar = () => {
  return (
    <Block>
      <Navbar items={items} layout={'bottom'} />
    </Block>
  );
};

const items = [
  { name: 'Home', url: '/', icon: faHouseUser },
  { name: 'Projects', url: '/projects', icon: faProjectDiagram },
  { name: 'Experiences', url: '/works', icon: faBusinessTime },
  { name: 'Studies', url: '/studies', icon: faBrain },
];

export default FooterNavbar;
