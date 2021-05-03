import { Block } from '../../styles';
import { StudyCollection } from './../blocks';
import { Title } from '../common';

function StudiesScreen({ studies }) {
  return (
    <Block>
      <Title center>Studies</Title>
      <StudyCollection studies={studies} />
    </Block>
  );
}

export default StudiesScreen;
