import { useEffect, useState } from 'react';
import { Block } from '../../../styles';

const SelectFileInput = ({ value, setValue }) => {
  const [image, setImage] = useState();
  const setValueHandler = (e) => {
    console.log(e.target.files[0]);
    setValue(e.target.files[0]);
  };

  return (
    <Block>
      <input type="file" value={value} onChange={(e) => setValueHandler(e)} />
    </Block>
  );
};

export default SelectFileInput;
