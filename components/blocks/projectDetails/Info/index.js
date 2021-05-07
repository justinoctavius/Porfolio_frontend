import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Block, Strong } from '../../../../styles';
import { Button } from '../../../common';
import Links from './Links';
import InfoStyled from './style';
import Techs from './Techs';

const Info = ({ links, technologies }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <InfoStyled show={showInfo}>
      <Block flex center>
        <Button
          className="info__showBtn"
          onClick={() => setShowInfo(!showInfo)}
        >
          <Strong size2 customColor={showInfo ? 'danger' : 'secondary'}>
            <FontAwesomeIcon icon={showInfo ? faTimesCircle : faBars} />
          </Strong>
        </Button>
      </Block>
      <Block grid cols="1fr 1fr" className="info__container">
        <Links links={links} />
        <Techs techs={technologies} />
      </Block>
    </InfoStyled>
  );
};

export default Info;
