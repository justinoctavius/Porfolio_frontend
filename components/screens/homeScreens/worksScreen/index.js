import { ShowMsg } from '../../../../helpers';
import { Block } from '../../../../styles';
import { Title } from '../../../common';
import { WorkCollection } from '../../../blocks';

const WorksScreen = ({ works, msg, status }) => {
  if (status != 200) {
    return ShowMsg.error(msg);
  }
  return (
    <Block>
      <Title center>Experiences</Title>
      <WorkCollection works={works} />
    </Block>
  );
};

export default WorksScreen;
