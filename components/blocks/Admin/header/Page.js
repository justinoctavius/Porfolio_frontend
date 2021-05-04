import { Button, Link } from '../../../common';
import { Block, Strong } from '../../../../styles';
import Title from '../../../common/Title';

const AdminHeaderPage = ({
  title,
  addUrl,
  updateUrl,
  selected,
  deleteAction,
}) => {
  return (
    <>
      <Block bg={'primary'} flex middle spaceBetween p1>
        <Title m0>{title}</Title>
        <Block display="flex" justify="flex-end" align="center">
          <Link size2 bold third href={`/admin/${addUrl}`}>
            Add {title}
          </Link>
        </Block>
      </Block>
      {selected && (
        <Block bg="primary" flex middle justifyEnd>
          <Button color="secondary">
            <Link primary bold href={updateUrl}>
              Update
            </Link>
          </Button>
          <Button m1 color="danger" onClick={deleteAction}>
            <Strong>Delete</Strong>
          </Button>
        </Block>
      )}
    </>
  );
};

export default AdminHeaderPage;
