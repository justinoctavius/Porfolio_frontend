import { Table } from '../../../common';
import { AdminElementLayout } from '../../../layouts';

const AdminLinksPage = ({ links, selected, setSelected, deleteAction }) => {
  return (
    <AdminElementLayout
      title={'Link'}
      addUrl={`links/manage?mode=add`}
      updateUrl={`links/manage?mode=update&id=${selected}`}
      deleteAction={deleteAction}
      selected={selected}
    >
      <Table
        collection={links}
        idField={'link_id'}
        selected={selected}
        setSelected={setSelected}
      />
    </AdminElementLayout>
  );
};

export default AdminLinksPage;
