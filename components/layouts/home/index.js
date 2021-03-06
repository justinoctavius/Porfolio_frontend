import { Block } from '../../../styles';
import { FooterNavbar, Header } from './../../blocks/';

const HomeLayout = ({ children }) => {
  return (
    <Block
      grid
      rows="5em 1fr min-content"
      height="100vh"
      width="100vw"
      style={{ overflow: 'hidden' }}
    >
      <Header />
      <Block style={{ overflowY: 'scroll' }}>{children}</Block>
      <FooterNavbar />
    </Block>
  );
};

export default HomeLayout;
