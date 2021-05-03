import { Block } from '../../../styles';
import { AdminHeader } from '../../blocks';

const AdminElementLayout = ({
  children,
  addUrl,
  updateUrl,
  deleteAction,
  selected,
  title,
}) => {
  return (
    <Block>
      <AdminHeader
        addUrl={addUrl}
        deleteAction={deleteAction}
        selected={selected}
        title={title}
        updateUrl={updateUrl}
      />
      {children}
    </Block>
  );
};

export default AdminElementLayout;
