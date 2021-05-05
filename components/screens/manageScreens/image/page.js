import { Block } from '../../../../styles';
import { Form, Input, SelectFileInput } from '../../../common';

const ManageImagePage = ({
  setImage,
  setName,
  error,
  name,
  image,
  success,
}) => {
  return (
    <Block>
      <Form error={error} success={success}>
        <Input
          type="text"
          label="Name"
          setValue={setName}
          value={name}
          minLength="3"
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </Form>
    </Block>
  );
};

export default ManageImagePage;
