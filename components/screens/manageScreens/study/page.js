import { Block } from '../../../../styles';
import { SelectImageInput, SelectTechInput } from '../../../blocks';
import { Form, Input } from '../../../common';

const ManageProjectPage = ({
  name,
  date,
  description,
  place,
  setName,
  setDate,
  setDescription,
  setPlace,
  error,
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
        <Input type="date" label="Date" setValue={setDate} value={date} />
        <Input type="text" label="Place" setValue={setPlace} value={place} />
        <Input
          type="text"
          label="Description"
          setValue={setDescription}
          value={description}
        />
      </Form>
    </Block>
  );
};

export default ManageProjectPage;
