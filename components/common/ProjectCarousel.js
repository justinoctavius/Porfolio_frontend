import { ProjectCarouselStyled } from '../../styles';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ projects, selected, setSelected }) => {
  return (
    <ProjectCarouselStyled>
      {projects?.map((project, index) => (
        <ProjectCard
          onClick={() => setSelected({ id: project?.project_id, index })}
          border={selected?.id == project?.project_id ? 'third' : null}
          project={project}
          key={project?.project_id}
        />
      ))}
    </ProjectCarouselStyled>
  );
};

export default ProjectCarousel;
