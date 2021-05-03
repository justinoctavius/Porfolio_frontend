import { Strong, Block, H2, A, Span } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from '.';

const Header = () => {
  return (
    <Block
      maxH="min-content"
      flex
      spaceBetween
      middle
      sticky
      zIndex1
      top="0"
      bg="primary"
      p2
    >
      <Link href={'/admin'}>
        <Block>
          <H2>Justin colon</H2>
          <Strong size2 third>
            Web developer
          </Strong>
        </Block>
      </Link>
      <Block flex justifyEnd middle>
        <Link href={'/contact'} size2 bold>
          Contact{' '}
          <Span third>
            <FontAwesomeIcon icon={faPhone} />
          </Span>{' '}
          Me
        </Link>
      </Block>
    </Block>
  );
};

export default Header;
