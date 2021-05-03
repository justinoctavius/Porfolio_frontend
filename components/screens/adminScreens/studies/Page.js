import { Table } from '../../../common';
import { AdminElementLayout } from '../../../layouts';

const AdminStudiesPage = ({ studies, selected, setSelected, deleteAction }) => {
  return (
    <AdminElementLayout
      title={'Study'}
      addUrl={`studies/manage?mode=add`}
      updateUrl={`studies/manage?mode=update&id=${selected}`}
      deleteAction={deleteAction}
      selected={selected}
    >
      <Table
        collection={studies}
        selected={selected}
        setSelected={setSelected}
        idField="study_id"
      />
    </AdminElementLayout>
  );
};

export default AdminStudiesPage;
