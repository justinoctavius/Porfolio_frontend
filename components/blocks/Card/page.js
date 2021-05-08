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
      height="15em"
      cols={image ? '2fr 3fr' : '1fr'}
      image={image}
      {...props}
    >
      {image && (
        <Block height="100%" hidden className="card_image">
          <img src={`${env.IMAGES_HOST}/${image}`} />
        </Block>
      )}
      <Block className="card_body">
        <Block>
          <H2>{title}</H2>
        </Block>
        <Block height="10em" scroll className="card_description">
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
