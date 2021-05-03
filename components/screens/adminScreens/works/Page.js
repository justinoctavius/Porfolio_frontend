import { Table } from '../../../common';
import { AdminElementLayout } from '../../../layouts';

const AdminWorksPage = ({ works, selected, setSelected, deleteAction }) => {
  return (
    <AdminElementLayout
      title={'Work'}
      addUrl={`works/manage?mode=add`}
      updateUrl={`works/manage?mode=update&id=${selected}`}
      deleteAction={deleteAction}
      selected={selected}
    >
      <Table
        collection={works}
        selected={selected}
        setSelected={setSelected}
        idField="work_id"
      />
    </AdminElementLayout>
  );
};

export default AdminWorksPage;
