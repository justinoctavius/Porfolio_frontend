import { certificateApi } from '../../../apis';
import { AdminLayout } from '../../../components/layouts';
import { ManageCertificateScreen } from '../../../components/screens';

const ManageCertificate = ({ data, mode }) => {
  return (
    <AdminLayout>
      <ManageCertificateScreen data={data} mode={mode} />;
    </AdminLayout>
  );
};

export const getServerSideProps = async (context) => {
  let data = { payload: {} };
  const { mode, id } = context.query;
  if (mode === 'update') data = await certificateApi.get(id);
  return { props: { data: data?.payload, mode } };
};

export default ManageCertificate;
