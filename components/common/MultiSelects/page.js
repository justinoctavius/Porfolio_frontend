import { themes } from '../../../constants';
import { Block, H2, Strong } from '../../../styles';
import MultiSelectsStyled from './style';

const MultiSelectsPage = ({
  options,
  selects,
  setSelects,
  name,
  value,
  title,
}) => {
  console.log(options);
  return (
    <MultiSelectsStyled width="100%">
      <Block>
        <label>{title}</label>
      </Block>
      <Block
        border
        bColor={themes.colors.secondary + '55'}
        radius1
        dashed
        flex
        p1
        maxH="20em"
        maxW="100%"
        m1
        scroll
      >
        {options &&
          options.length > 0 &&
          options?.map((option) => (
            <Block m1>
              <input
                name={option.name}
                type="checkbox"
                value={option[value]}
                onChange={(e) => setSelects(e.currentTarget.value)}
                checked={selects.includes(option[value])}
              />
              <label htmlFor={option[name]}>{option[name]}</label>
            </Block>
          ))}
      </Block>
    </MultiSelectsStyled>
  );
};

export default MultiSelectsPage;
