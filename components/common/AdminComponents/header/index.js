import AdminHeaderPage from './Page';

const AdminHeader = ({ title, addUrl, updateUrl, selected, deleteAction }) => {
  return (
    <AdminHeaderPage
      title={title}
      addUrl={addUrl}
      updateUrl={updateUrl}
      selected={selected}
      deleteAction={deleteAction}
    />
  );
};

export default AdminHeader;
