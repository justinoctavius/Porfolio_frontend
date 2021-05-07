import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../../../common';
import ItemStyled from './style';

const ItemPage = ({ url, icon, name, onClick }) => {
  return (
    <ItemStyled m1 onClick={onClick}>
      <Link bold size2 center href={url}>
        <FontAwesomeIcon icon={icon} />
        <br />
        {name}
      </Link>
    </ItemStyled>
  );
};

export default ItemPage;
