import { faDoorOpen, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { themes } from '../../../constants';
import { Block, Strong } from '../../../styles';
import { Button, Title } from '../../common';
import ManageLayoutStyled from './style';

const { colors } = themes;

const ManageLayout = ({ mode, title, children, addAction, updateAction }) => {
  const modeUpper = mode.replace(mode[0], mode[0].toUpperCase());
  const router = useRouter();
  return (
    <ManageLayoutStyled height="100vh" gradient2 center flex middle>
      <Block
        grid
        bg={colors.primary + '55'}
        rows="min-content 1fr min-content"
        height="100%"
        width="max-content"
        border
        radius2
        bColor="secondary"
        p1
      >
        <Block>
          <Title secondary bold>
            {modeUpper} {title}
          </Title>
        </Block>
        <Block scroll flex center>
          {children}
        </Block>
        <Block flex justifyEnd>
          <Button
            m1
            color="third"
            radius1
            minW="8em"
            onClick={mode == 'update' ? updateAction : addAction}
          >
            <Strong>
              {mode == 'update' ? 'Save' : 'Add'}{' '}
              <FontAwesomeIcon icon={mode == 'update' ? faSave : faPlus} />
            </Strong>
          </Button>
          <Button
            m1
            color="danger"
            radius1
            minW="8em"
            onClick={() => router.back()}
          >
            <Strong>
              Close <FontAwesomeIcon icon={faDoorOpen} />{' '}
            </Strong>
          </Button>
        </Block>
      </Block>
    </ManageLayoutStyled>
  );
};

export default ManageLayout;
