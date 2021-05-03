import { linkApi } from '../../../apis';
import { AdminLayout } from '../../../components/layouts';
import { ManageLinkScreen } from '../../../components/screens';

const ManageLink = ({ data, mode }) => {
  return (
    <AdminLayout>
      <ManageLinkScreen data={data} mode={mode} />;
    </AdminLayout>
  );
};

export const getServerSideProps = async (context) => {
  let data = { payload: {} };
  const { mode, id } = context.query;
  if (mode === 'update') data = await linkApi.get(id);
  return { props: { data: data?.payload, mode } };
};

export default ManageLink;
