import env from '../../config/env';
import { Block, H2, P, CardStyled } from '../../styles';

const Card = ({ title, description, image, date }) => {
  return (
    <CardStyled image={image}>
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

export default Card;
