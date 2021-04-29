import { Block, H1 } from '../../styles';
import { StudyCollection } from '../common';

function StudiesScreen({ studies }) {
  return (
    <Block bg="primary">
      <Block p2>
        <H1 center>Studies</H1>
      </Block>
      <StudyCollection studies={studies} />
    </Block>
  );
}

export default StudiesScreen;
