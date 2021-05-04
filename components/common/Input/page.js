import { useState } from 'react';
import { InputContainerStyled, InputStyled } from './style';

const InputPage = ({ value, type, setValue, Label, Error }) => {
  const [focus, setFocus] = useState(false);
  return (
    <InputContainerStyled error={Error()} focus={focus} value={value}>
      <Label />
      <InputStyled
        width="20em"
        bg="transparent"
        border
        bColor="secondary"
        p1
        value={value}
        onChange={(e) => setValue(e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type={type}
      />
      <Error />
    </InputContainerStyled>
  );
};

export default InputPage;
