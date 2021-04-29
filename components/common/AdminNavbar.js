import {
  faBrain,
  faBusinessTime,
  faCertificate,
  faCode,
  faCogs,
  faHouseUser,
  faImage,
  faLink,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import { Block } from '../../styles';
import Navbar from './Navbar';

const AdminNavbar = () => {
  return (
    <Block>
      <Navbar items={items} />
    </Block>
  );
};

const items = [
  {
    name: 'Home',
    url: '/',
    icon: faHouseUser,
  },
  {
    name: 'Project',
    url: '/admin/projects',
    icon: faProjectDiagram,
  },
  {
    name: 'Work',
    url: '/admin/works',
    icon: faBusinessTime,
  },
  {
    name: 'Study',
    url: '/admin/studies',
    icon: faBrain,
  },
  {
    name: 'Link',
    url: '/admin/links',
    icon: faLink,
  },
  {
    name: 'Certificate',
    url: '/admin/certificates',
    icon: faCertificate,
  },
  {
    name: 'Technology',
    url: '/admin/techs',
    icon: faCode,
  },
  {
    name: 'Image',
    url: '/admin/images',
    icon: faImage,
  },
  {
    name: 'Settings',
    url: '/admin/settings',
    icon: faCogs,
  },
];

export default AdminNavbar;
