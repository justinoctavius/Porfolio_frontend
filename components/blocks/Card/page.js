import env from '../../../config/env';
import { Block, H2, P } from '../../../styles';
import CardStyled from './style';

const CardPage = (props) => {
  const { title, description, image, date } = props;
  return (
    <CardStyled
      grid
      m1
      border
      bColor="third"
      minH="15em"
      cols={image ? '2fr 3fr' : '1fr'}
      image={image}
      {...props}
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
          <P center>{description}</P>
        </Block>
        {date && (
          <Block>
            <time>{new Date(date).toDateString()}</time>
          </Block>
        )}
      </Block>
    </CardStyled>
  );
};

export default CardPage;
