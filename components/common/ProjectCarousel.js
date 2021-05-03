import { ProjectCarouselStyled } from '../../styles';
import { Card } from '../blocks';

const ProjectCarousel = ({ projects, selected, setSelected }) => {
  return (
    <ProjectCarouselStyled>
      {projects?.map((project, index) => (
        <Card
          description={project?.description}
          image={project?.images[0]?.url}
          title={project?.name}
          bColor={project?.project_id == selected.id ? 'third' : 'secondary'}
          onClick={() => setSelected({ index, id: project.project_id })}
          key={index}
        />
      ))}
    </ProjectCarouselStyled>
  );
};

export default ProjectCarousel;
