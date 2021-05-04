import { Block } from '../../../../styles';
import { SelectImageInput, SelectTechInput } from '../../../blocks';
import { Form, Input } from '../../../common';

const ManageProjectPage = ({
  name,
  date,
  images,
  technologies,
  description,
  setName,
  setDate,
  setImages,
  setTechnologies,
  setDescription,
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
        <SelectTechInput
          selected={technologies}
          setSelected={setTechnologies}
        />
        <SelectImageInput selected={images} setSelected={setImages} />
      </Form>
    </Block>
  );
};

export default ManageProjectPage;
