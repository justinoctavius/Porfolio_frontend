import { Block } from '../../../../styles';
import { SelectLevelInput } from '../../../blocks';
import { Form, Input } from '../../../common';

const ManageTechPage = ({ setLevel, setName, error, name, level, success }) => {
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
        <SelectLevelInput selected={level} setSelected={setLevel} />
      </Form>
    </Block>
  );
};

export default ManageTechPage;
