import { projectApi } from '../../../apis';
import { AdminLayout } from '../../../components/layouts';
import { ManageProjectScreen } from '../../../components/screens';

const ManageLink = ({ data, mode }) => {
  return (
    <AdminLayout>
      <ManageProjectScreen data={data} mode={mode} />;
    </AdminLayout>
  );
};

export const getServerSideProps = async (context) => {
  let data = { payload: {} };
  const { mode, id } = context.query;
  if (mode === 'update') data = await projectApi.get(id);
  return { props: { data: data?.payload, mode } };
};

export default ManageLink;
