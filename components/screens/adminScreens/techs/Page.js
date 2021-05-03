import { Table } from '../../../common';
import { AdminElementLayout } from '../../../layouts';

const AdminTechsPage = ({ techs, selected, setSelected, deleteAction }) => {
  return (
    <AdminElementLayout
      title={'Tech'}
      addUrl={`techs/manage?mode=add`}
      updateUrl={`techs/manage?mode=update&id=${selected}`}
      deleteAction={deleteAction}
      selected={selected}
    >
      <Table
        collection={techs}
        selected={selected}
        setSelected={setSelected}
        idField="tech_id"
      />
    </AdminElementLayout>
  );
};

export default AdminTechsPage;
