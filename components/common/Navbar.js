import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Link from './Link';
import { Block, NavbarStyled, Strong } from '../../styles';
import { useState } from 'react';

const Navbar = ({ items, layout }) => {
  const [show, setShow] = useState(true);

  return (
    <NavbarStyled show={show} layout={layout}>
      <Block p1>
        <Strong size4 pointer onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faBars} />
        </Strong>
      </Block>
      <Block bg={'#111111'}>
        <Block>
          <Block>
            <Strong size3 pointer onClick={() => setShow(false)}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </Strong>
          </Block>
          {items &&
            items?.map((item) => (
              <Block m1>
                <Link bold size2 center href={item.url}>
                  <FontAwesomeIcon icon={item.icon} />
                  <br />
                  {item.name}
                </Link>
              </Block>
            ))}
        </Block>
      </Block>
    </NavbarStyled>
  );
};

export default Navbar;
