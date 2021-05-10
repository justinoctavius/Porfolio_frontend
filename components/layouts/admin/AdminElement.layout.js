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
    <Block height="100%">
      <AdminHeader
        addUrl={addUrl}
        deleteAction={deleteAction}
        selected={selected}
        title={title}
        updateUrl={updateUrl}
      />
      <Block width="100vw" height="100vh" scroll>
        {children}
      </Block>
    </Block>
  );
};

export default AdminElementLayout;
