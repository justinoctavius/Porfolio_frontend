import { Block } from '../../styles';
import StudyCollection from './../blocks/StudyCollection'; //error when i remove the next path and only put the block
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
