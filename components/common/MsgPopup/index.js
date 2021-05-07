import { Block, P, Strong } from '../../../styles';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MsgPopup = ({ msg, bg, center, right, left }) => {
  const [show, setShow] = useState(true);
  return show ? (
    <Block
      bg={bg || 'secondary'}
      absolute
      flex
      fColumn
      left={(center && '40%') || (right && 'auto') || (left && '0px')}
      right={(center && '40%') || (right && '0px') || (left && 'auto')}
      height={'8em'}
      minW={'15em'}
      m1
    >
      <Block flex width="100%" justifyEnd>
        <Button height="min-content" onClick={() => setShow(false)}>
          <Strong>
            <FontAwesomeIcon icon={faTimes} />
          </Strong>
        </Button>
      </Block>
      <Block p1>
        <P center>{msg}</P>
      </Block>
    </Block>
  ) : null;
};

export default MsgPopup;
