import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themes } from '../../../../constants';
import { Block } from '../../../../styles';

const ToggleShowBtnPage = (props) => {
  const { show, setShow } = props;
  return (
    <Block {...props}>
      <Strong
        size4
        customColor={themes.colors[show ? 'danger' : 'secondary'] + '88'}
        pointer
        onClick={() => {
          setShow(!show);
        }}
      >
        <FontAwesomeIcon icon={show ? faTimesCircle : faBars} />
      </Strong>
    </Block>
  );
};

export default ToggleShowBtnPage;
