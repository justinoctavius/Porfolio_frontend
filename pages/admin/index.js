import { AdminLayout } from '../../components/layouts';
import ProviderWrapper from '../../components/providers';
import { AdminScreen } from '../../components/screens';

const Admin = () => {
  return (
    <ProviderWrapper>
      <AdminLayout>
        <AdminScreen />
      </AdminLayout>
    </ProviderWrapper>
  );
};

export default Admin;
