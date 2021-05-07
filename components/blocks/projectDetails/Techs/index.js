import { Block, H1, H2, Strong } from '../../../../styles';
import { Title } from '../../../common';
import TechsStyled from './style';

const Techs = ({ techs }) => {
  return (
    <TechsStyled bg="secondary">
      <Block p1>
        <H2 size2 center primary>
          Technologies
        </H2>
      </Block>
      <ul>
        {techs &&
          techs.map((tech) => (
            <li key={tech.tech_id}>
              <Strong>{tech.name}</Strong>
            </li>
          ))}
      </ul>
    </TechsStyled>
  );
};

export default Techs;
