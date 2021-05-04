import { technologyApi } from '../../../apis';
import { AdminLayout } from '../../../components/layouts';
import { ManageTechScreen } from '../../../components/screens';

const ManageTech = ({ data, mode }) => {
  return (
    <AdminLayout>
      <ManageTechScreen data={data} mode={mode} />;
    </AdminLayout>
  );
};

export const getServerSideProps = async (context) => {
  let data = { payload: {} };
  const { mode, id } = context.query;
  if (mode === 'update') data = await technologyApi.get(id);
  return { props: { data: data?.payload, mode } };
};

export default ManageTech;
