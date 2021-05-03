import { Block } from '../../styles';
import { FooterNavbar } from './../blocks/';
import { Header } from '../common';

const Layout = ({ children }) => {
  return (
    <Block
      grid
      rows="5em 1fr min-content"
      minH="100vh"
      maxW="100vw"
      minW="100vw"
      maxH="100vh"
    >
      <Header />
      <Block scroll>{children}</Block>
      <FooterNavbar />
    </Block>
  );
};

export default Layout;
