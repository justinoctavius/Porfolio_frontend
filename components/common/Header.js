import { Strong, Block, HeaderStyled, H2, A, Span } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from '.';

const Header = () => {
  return (
    <HeaderStyled>
      <Link href={'/admin'}>
        <Block>
          <H2>Justin colon</H2>
          <Strong size1 third>
            Web developer
          </Strong>
        </Block>
      </Link>
      <Block display={'flex'} justify={'flex-end'} align={'center'}>
        <Link href={'/contact'} size2 bold>
          Contact{' '}
          <Span third>
            <FontAwesomeIcon icon={faPhone} />
          </Span>{' '}
          Me
        </Link>
      </Block>
    </HeaderStyled>
  );
};

export default Header;
