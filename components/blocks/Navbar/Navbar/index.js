import { useState } from 'react';
import NavbarPage from './page';

const Navbar = ({ layout, items }) => {
  const [show, setShow] = useState(true);
  return (
    <NavbarPage show={show} layout={layout} items={items} setShow={setShow} />
  );
};

export default Navbar;
