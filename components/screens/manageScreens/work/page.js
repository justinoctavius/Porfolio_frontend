import { Block } from '../../../../styles';
import { SelectLevelInput } from '../../../blocks';
import { Form, Input } from '../../../common';

const ManageTechPage = ({
  setDate,
  setName,
  setDescription,
  name,
  date,
  description,
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

export default ManageTechPage;
