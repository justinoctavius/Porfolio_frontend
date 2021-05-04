import { studyApi } from '../../../apis';
import { AdminLayout } from '../../../components/layouts';
import { ManageStudyScreen } from '../../../components/screens';

const ManageStudy = ({ data, mode }) => {
  return (
    <AdminLayout>
      <ManageStudyScreen data={data} mode={mode} />;
    </AdminLayout>
  );
};

export const getServerSideProps = async (context) => {
  let data = { payload: {} };
  const { mode, id } = context.query;
  if (mode === 'update') data = await studyApi.get(id);
  return { props: { data: data?.payload, mode } };
};

export default ManageStudy;
