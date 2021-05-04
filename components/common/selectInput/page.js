import { useState } from 'react';
import SelectStyled from './style';

const SelectInputPage = ({
  options,
  label,
  setSelected,
  selected,
  element_id,
  element_name,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <SelectStyled focus={focus}>
      <label>{label}</label>
      <select
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        defaultValue={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Select a {label}</option>
        {options &&
          options.length > 0 &&
          options.map((opt) => {
            return (
              <option
                value={opt[element_id]}
                selected={opt[element_id] == selected}
                key={opt[element_id]}
              >
                {opt.name || opt[element_name]}
              </option>
            );
          })}
      </select>
    </SelectStyled>
  );
};

export default SelectInputPage;
