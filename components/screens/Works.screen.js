import { ShowMsg } from '../../helpers';
import { Block, H1 } from '../../styles';
import { WorkCard } from '../common';
import WorkCollection from '../common/WorkCollection';

const WorksScreen = ({ works, msg }) => {
  if (msg != 'success') {
    return ShowMsg.error(msg);
  }
  return (
    <Block bg={'primary'} p1>
      <Block m2>
        <H1 center>Experiences</H1>
      </Block>
      <WorkCollection works={works} />
    </Block>
  );
};

export default WorksScreen;
