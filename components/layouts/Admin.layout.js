import { Block, AdminLayoutStyled } from '../../styles';
import { AdminNavbar } from '../common';

const AdminLayout = ({ children }) => {
  return (
    <AdminLayoutStyled>
      <AdminNavbar />
      <Block>{children}</Block>
    </AdminLayoutStyled>
  );
};

export default AdminLayout;
