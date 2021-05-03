import { Collection } from '..';
import Card from '../Card';

const WorkCollection = ({ works }) => {
  return (
    <Collection>
      {works?.length > 0 &&
        works.map((work) => (
          <Card
            date={work.date}
            title={work.name}
            description={work.description}
            key={work.work_id}
          />
        ))}
    </Collection>
  );
};

export default WorkCollection;
