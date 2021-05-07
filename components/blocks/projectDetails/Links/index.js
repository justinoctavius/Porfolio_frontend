import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Block, H1, H2 } from '../../../../styles';
import { Link, Title } from '../../../common';
import LinksStyled from './style';

const Links = ({ links }) => {
  return (
    <LinksStyled bg="secondary">
      <Block p1>
        <H2 center primary>
          Links
        </H2>
      </Block>
      <ul>
        {links &&
          links.map((link) => (
            <li key={link.link_id}>
              <Link primary style={{ fontSize: '1.2em' }} href={link.url}>
                {link.name} <FontAwesomeIcon icon={faLink} />
              </Link>
            </li>
          ))}
      </ul>
    </LinksStyled>
  );
};

export default Links;
