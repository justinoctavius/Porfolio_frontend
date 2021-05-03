import { Block, H1 } from '../../styles';

const Title = (props) => {
  const {
    children,
    m0,
    center,
    right,
    left,
    primary,
    secondary,
    third,
    danger,
  } = props;
  return (
    <Block {...props} m2={!m0}>
      <H1
        center={center}
        primary={primary}
        secondary={secondary}
        third={third}
        danger={danger}
        right={right}
        left={left}
      >
        {children}
      </H1>
    </Block>
  );
};

export default Title;
