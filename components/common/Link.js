import Link from 'next/link';
import { useState } from 'react';
import { themes } from '../../constants';
import { A } from '../../styles';

const LinkCommon = (props) => {
  const [hover, setHover] = useState(false);

  const _hoverHandler = () => {
    setHover(true);
  };

  const _leaveHandler = () => {
    setHover(false);
  };

  return (
    <Link href={props.href}>
      <A
        {...props}
        onMouseOver={() => _hoverHandler()}
        customColor={hover && themes.colors.third + 'dd'}
        onMouseLeave={_leaveHandler}
      >
        {props.children}
      </A>
    </Link>
  );
};

export default LinkCommon;
