import { Block } from '../../../../styles';
import ItemCollection from '../ItemCollection';
import ToggleShowBtn from '../ToggleShowBtn';
import NavbarStyled from './style';

const NavbarPage = ({ items, layout, show, setShow }) => {
  return (
    <NavbarStyled show={show} layout={layout}>
      <ToggleShowBtn show={false} setShow={setShow} m1 className="showBtn" />
      <Block bg={'primary'} className="items_box">
        <Block className="items">
          <ToggleShowBtn show={true} setShow={setShow} m1 className="showBtn" />
          <ItemCollection show={show} items={items} setShow={setShow} />
        </Block>
      </Block>
    </NavbarStyled>
  );
};

export default NavbarPage;
