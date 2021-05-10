import env from '../../../config/env';
import { Block, H2, P } from '../../../styles';
import CardStyled from './style';

const CardPage = (props) => {
  const { title, description, image, date } = props;
  return (
    <CardStyled
      grid
      m1
      height="15em"
      cols={image ? '2fr 3fr' : '1fr'}
      border
      image={image}
      pointer
      {...props}
    >
      {image && (
        <Block
          height="100%"
          className="card_image"
          flex
          relative
          center
          overflowHidden
          border
          bColor="third"
          bg="third"
        >
          <img src={`${env.IMAGES_HOST}/${image}`} />
        </Block>
      )}
      <Block className="card_body" bg="secondary">
        <Block p2 flex middle center bg="primary">
          <H2>{title}</H2>
        </Block>
        <Block height="10em" overflowHidden pt2 p1 className="card_description">
          <P primary>{description}</P>
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
