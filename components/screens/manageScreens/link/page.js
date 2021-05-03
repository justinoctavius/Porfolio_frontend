import { Block } from '../../../../styles';
import { SelectProjectInput } from '../../../Blocks';
import { Form, Input } from '../../../common';

const ManageLinkPage = ({
  setProjectId,
  setUrl,
  setName,
  error,
  name,
  url,
  projectId,
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
        <Input type="text" label="Url" setValue={setUrl} value={url} link />
        <SelectProjectInput selected={projectId} setSelected={setProjectId} />
      </Form>
    </Block>
  );
};

export default ManageLinkPage;
