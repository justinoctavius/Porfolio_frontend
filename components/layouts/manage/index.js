import { themes } from '../../../constants';
import { Block, H1, Strong } from '../../../styles';
import { Button, Link, Title } from '../../common';
import ManageLayoutStyled from './style';

const { colors } = themes;

const ManageLayout = ({ mode, title, children, addAction, updateAction }) => {
  const modeUpper = mode.replace(mode[0], mode[0].toUpperCase());
  return (
    <ManageLayoutStyled
      height="100vh"
      bg={`linear-gradient(305deg, ${colors.primary} 50%,${colors.secondary})`}
      center
      flex
      middle
    >
      <Block
        grid
        bg={colors.primary + '55'}
        rows="min-content 1fr min-content"
        minH="50vh"
        minW="50vw"
        border
        radius2
        bColor="third"
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
            minW="8em"
            onClick={mode == 'update' ? updateAction : addAction}
          >
            <Strong size2>{mode == 'update' ? 'Save' : 'Add'}</Strong>
          </Button>
          <Button
            m1
            color="danger"
            minW="8em"
            onClick={() => window.history.back()}
          >
            <Strong size2>Cancel</Strong>
          </Button>
        </Block>
      </Block>
    </ManageLayoutStyled>
  );
};

export default ManageLayout;
