import Card from '../Card';
import { Collection } from '..';

const ProjectCollection = ({ projects, selected, setSelected }) => {
  return (
    <Collection maxCols="2">
      {projects?.map((project, index) => (
        <Card
          description={project?.description}
          image={project?.images[0]?.url}
          title={project?.name}
          bColor={project?.project_id == selected.id ? 'hover' : 'secondary'}
          pointer
          onClick={() => setSelected({ index, id: project.project_id })}
          key={index}
        />
      ))}
    </Collection>
  );
};

export default ProjectCollection;
