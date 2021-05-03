import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../../../common';
import ItemStyled from './style';

const ItemPage = ({ url, icon, name }) => {
  return (
    <ItemStyled m1>
      <Link bold size2 center href={url}>
        <FontAwesomeIcon icon={icon} />
        <br />
        {name}
      </Link>
    </ItemStyled>
  );
};

export default ItemPage;
