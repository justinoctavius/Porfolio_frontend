import { useState } from 'react';
import { Table } from '../../../common';
import { AdminElementLayout } from '../../../layouts';

const AdminProjectsPage = ({
  projects,
  selected,
  setSelected,
  deleteAction,
}) => {
  return (
    <AdminElementLayout
      title={'Project'}
      addUrl={`projects/manage?mode=add`}
      updateUrl={`projects/manage?mode=update&id=${selected}`}
      deleteAction={deleteAction}
      selected={selected}
    >
      <Table
        collection={projects}
        selected={selected}
        setSelected={setSelected}
        idField="project_id"
      />
    </AdminElementLayout>
  );
};

export default AdminProjectsPage;
