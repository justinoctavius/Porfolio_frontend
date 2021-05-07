import { ShowMsg } from '../../../../helpers';
import { Block } from '../../../../styles';
import { StudyCollection } from '../../../blocks';
import { Title } from '../../../common';

function StudiesScreen({ studies, msg, status }) {
  if (status != 200) {
    return ShowMsg.error(msg);
  }
  return (
    <Block>
      <Title center>Studies</Title>
      <StudyCollection studies={studies} />
    </Block>
  );
}

export default StudiesScreen;
