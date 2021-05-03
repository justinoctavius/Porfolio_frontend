import env from '../../../config/env';
import { Block, H2, P } from '../../../styles';
import CardStyled from './style';

const CardPage = ({ title, description, image, date }) => {
  return (
    <CardStyled
      grid
      m1
      border
      bColor="third"
      minH="15em"
      cols={image ? '1fr 2fr' : '1fr'}
      image={image}
    >
      {image && (
        <Block>
          <img src={`${env.IMAGES_HOST}/${image}`} />
        </Block>
      )}
      <Block>
        <Block>
          <H2>{title}</H2>
        </Block>
        <Block>
          <P>{description}</P>
        </Block>
        <Block>
          <time>{new Date(date).toDateString()}</time>
        </Block>
      </Block>
    </CardStyled>
  );
};

export default CardPage;
