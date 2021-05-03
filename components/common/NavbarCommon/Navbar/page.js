import { Block } from '../../../../styles';
import ItemCollection from '../ItemCollection';
import ToggleShowBtn from '../ToggleShowBtn';
import NavbarStyled from './style';

const NavbarPage = ({ items, layout, show, setShow }) => {
  return (
    <NavbarStyled show={show} layout={layout}>
      <ToggleShowBtn show={show} setShow={setShow} m1 />
      <Block bg={'primary'}>
        <Block>
          <ToggleShowBtn show={show} setShow={setShow} m1 />
          <ItemCollection show={show} items={items} setShow={setShow} />
        </Block>
      </Block>
    </NavbarStyled>
  );
};

export default NavbarPage;
