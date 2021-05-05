import { Block } from '../../../../styles';
import {
  SelectImageInput,
  SelectTechInput,
  MultiSelectsTechs,
  MultiSelectsImages,
} from '../../../blocks';
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
        <MultiSelectsTechs
          selects={technologies}
          setSelects={setTechnologies}
        />

        <MultiSelectsImages selects={images} setSelects={setImages} />
      </Form>
    </Block>
  );
};

export default ManageProjectPage;
