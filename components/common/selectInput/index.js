import SelectInputPage from './page';

const SelectInput = ({
  options,
  label,
  setSelected,
  selected,
  element_id,
  disabled,
}) => {
  return (
    <SelectInputPage
      setSelected={setSelected}
      selected={selected}
      options={options}
      element_id={element_id}
      label={label}
      disabled={disabled}
    />
  );
};

export default SelectInput;
