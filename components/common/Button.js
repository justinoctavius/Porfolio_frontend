import { useState } from 'react';
import { themes } from '../../constants';
import { Block } from '../../styles';

const Button = (props) => {
  const [hover, setHover] = useState(false);
  const { children, onClick, color } = props;

  const _hoverHandler = () => {
    setHover(true);
  };
  const _leaveHandler = () => {
    setHover(false);
  };

  return (
    <Block
      {...props}
      bg={!hover ? color : themes.colors[color] + 'dd'}
      pointer
      p1
      radius1
      flex
      middle
      center
      onMouseOver={_hoverHandler}
      onMouseLeave={_leaveHandler}
      onClick={onClick}
    >
      {children}
    </Block>
  );
};

export default Button;
