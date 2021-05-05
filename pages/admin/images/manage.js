import { imageApi } from '../../../apis';
import { AdminLayout } from '../../../components/layouts';
import { ManageImageScreen } from '../../../components/screens';

const ManageImage = ({ data, mode }) => {
  return (
    <AdminLayout>
      <ManageImageScreen data={data} mode={mode} />;
    </AdminLayout>
  );
};

export const getServerSideProps = async (context) => {
  let data = { payload: {} };
  const { mode, id } = context.query;
  if (mode === 'update') data = await imageApi.get(id);
  return { props: { data: data?.payload, mode } };
};

export default ManageImage;
