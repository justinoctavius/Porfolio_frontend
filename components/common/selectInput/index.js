import SelectInputPage from './page';

const SelectInput = ({ options, label, setSelected, selected, element_id }) => {
  return (
    <SelectInputPage
      setSelected={setSelected}
      selected={selected}
      options={options}
      element_id={element_id}
      label={label}
    />
  );
};

export default SelectInput;
