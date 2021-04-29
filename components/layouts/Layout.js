import { LayoutStyled } from '../../styles';
import { Footer, Header } from '../common';

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      {children}
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
