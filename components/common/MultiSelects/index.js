import MultiSelectsPage from './page';

const MultiSelects = ({
  selects,
  setSelects,
  name,
  id_name,
  title,
  options,
}) => {
  const setSelectsHandler = async (selected) => {
    if (!selects.includes(selected)) {
      setSelects([...selects, selected]);
    } else {
      const newSelects = await selects.filter((select) => select !== selected);
      setSelects([...newSelects]);
    }
  };

  return (
    <MultiSelectsPage
      selects={selects}
      name={name}
      value={id_name}
      setSelects={setSelectsHandler}
      options={options}
      title={title}
    />
  );
};

export default MultiSelects;
