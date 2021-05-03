import { Block } from '../../styles';
import { FooterNavbar, Header } from './../blocks/';

const Layout = ({ children }) => {
  return (
    <Block
      grid
      rows="5em 1fr min-content"
      height="100vh"
      width="100vw"
      style={{ overflow: 'hidden' }}
    >
      <Header />
      <Block scroll>{children}</Block>
      <FooterNavbar />
    </Block>
  );
};

export default Layout;
