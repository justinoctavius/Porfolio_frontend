import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import env from '../../../../config/env';
import { Block, Strong } from '../../../../styles';
import { Button } from '../../../common';
import ImagesStyled from './style';

const ImagesPage = ({ images, selected, setNext, setBefore }) => {
  return (
    <ImagesStyled selected={selected}>
      <Button onClick={setBefore} className={'images__Btn prevBtn'}>
        <Strong>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Strong>
      </Button>
      <Block className={'images__container'}>
        {images &&
          images?.map((image) => (
            <Block absolute key={image.image_id}>
              <img src={`${env.IMAGES_HOST}/${image?.url}`} />
            </Block>
          ))}
      </Block>
      <Button onClick={setNext} className={'images__Btn nextBtn'}>
        <Strong>
          <FontAwesomeIcon icon={faArrowRight} />
        </Strong>
      </Button>
    </ImagesStyled>
  );
};

export default ImagesPage;
