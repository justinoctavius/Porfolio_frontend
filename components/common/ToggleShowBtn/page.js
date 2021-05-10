import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themes } from '../../../constants';
import { Block, Strong } from '../../../styles';

const ToggleShowBtnPage = (props) => {
  const { show, setShow } = props;
  return (
    <Block {...props} bg={!show && themes.colors.secondary + '55'} radius2>
      <Strong
        size4
        customColor={themes.colors[show ? 'danger' : 'primary'] + 'dd'}
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
