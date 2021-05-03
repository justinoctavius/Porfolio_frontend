import { Table } from '../../../common';
import { AdminElementLayout } from '../../../layouts';

const AdminImagesPage = ({ images, selected, deleteAction, setSelected }) => {
  return (
    <AdminElementLayout
      title={'Image'}
      addUrl={`images/manage?mode=add`}
      updateUrl={`images/manage?mode=update&id=${selected}`}
      deleteAction={deleteAction}
      selected={selected}
    >
      <Table
        collection={images}
        idField={'image_id'}
        selected={selected}
        setSelected={setSelected}
      />
    </AdminElementLayout>
  );
};

export default AdminImagesPage;
