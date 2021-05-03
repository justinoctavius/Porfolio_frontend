import Card from '../Card';
import ProjectCollectionStyled from './style';

const ProjectCollection = ({ projects, selected, setSelected }) => {
  return (
    <ProjectCollectionStyled flex scroll maxW="100vw">
      {projects?.map((project, index) => (
        <Card
          description={project?.description}
          image={project?.images[0]?.url}
          title={project?.name}
          bColor={project?.project_id == selected.id ? 'third' : 'secondary'}
          block
          pointer
          height="min-content"
          onClick={() => setSelected({ index, id: project.project_id })}
          key={index}
        />
      ))}
    </ProjectCollectionStyled>
  );
};

export default ProjectCollection;
