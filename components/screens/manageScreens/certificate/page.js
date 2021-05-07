import { Block } from '../../../../styles';
import { SelectImageInput, SelectStudyInput } from '../../../blocks';
import { Form, Input } from '../../../common';

const ManageCertificatePage = ({
  setStudyId,
  setImageId,
  setName,
  name,
  studyId,
  imageId,
  error,
  success,
  mode,
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
        <SelectImageInput selected={imageId} setSelected={setImageId} />
        <SelectStudyInput
          selected={studyId}
          setSelected={setStudyId}
          excludeStudyWithCertificate
          disabled={mode == 'update'}
        />
      </Form>
    </Block>
  );
};

export default ManageCertificatePage;
