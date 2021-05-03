import { Block } from '../../styles';
import { AdminNavbar } from '../blocks';
import ProviderWrapper from '../providers';

const AdminLayout = ({ children }) => {
  return (
    <Block
      grid
      cols={'min-content 1fr'}
      maxH="100vh"
      maxW="100vw"
      overflowHidden
    >
      <AdminNavbar />
      <ProviderWrapper>
        <Block minW="100%" maxW="100vmin">
          {children}
        </Block>
      </ProviderWrapper>
    </Block>
  );
};

export default AdminLayout;
