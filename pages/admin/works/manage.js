import { workApi } from '../../../apis';
import { AdminLayout } from '../../../components/layouts';
import { ManageWorkScreen } from '../../../components/screens';

const ManageWork = ({ data, mode }) => {
  return (
    <AdminLayout>
      <ManageWorkScreen data={data} mode={mode} />;
    </AdminLayout>
  );
};

export const getServerSideProps = async (context) => {
  let data = { payload: {} };
  const { mode, id } = context.query;
  if (mode === 'update') data = await workApi.get(id);
  return { props: { data: data?.payload, mode } };
};

export default ManageWork;
