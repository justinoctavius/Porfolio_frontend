import { ErrorMsg, Table } from '../../../common';
import { AdminElementLayout } from '../../../layouts';

const AdminCertificatesPage = ({
  certificates,
  selected,
  deleteAction,
  setSelected,
}) => {
  return (
    <AdminElementLayout
      title={'Certificate'}
      addUrl={`certificates/manage?mode=add`}
      updateUrl={`certificates/manage?mode=update&id=${selected}`}
      deleteAction={deleteAction}
      selected={selected}
    >
      <Table
        collection={certificates}
        idField={'certificate_id'}
        selected={selected}
        setSelected={setSelected}
      />
    </AdminElementLayout>
  );
};

export default AdminCertificatesPage;
