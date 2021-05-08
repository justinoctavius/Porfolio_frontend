import { useEffect } from 'react';
import { SESSION } from '../../../constants';
import { Block } from '../../../styles';
import { AdminNavbar } from '../../blocks';
import ProviderWrapper from '../../providers';
import { LoginScreen } from '../../screens';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage?.getItem(SESSION)) {
      router.push('/admin/login');
    }
  }, []);

  return (
    <Block
      grid
      cols={'min-content 1fr'}
      maxH="100vh"
      maxW="100vw"
      overflowHidden
    >
      <ProviderWrapper>
        <AdminNavbar />
        <Block minW="100%" scroll maxW="100vmin">
          {children}
        </Block>
      </ProviderWrapper>
    </Block>
  );
};

export default AdminLayout;
