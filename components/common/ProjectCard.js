import env from '../../config/env';
import { Block, P, ProjectCardStyled, Strong } from '../../styles';

const ProjectCard = ({ project, border, onClick }) => {
  console.log(project);
  return (
    <ProjectCardStyled border={border} radius1 onClick={onClick}>
      <Block>
        <img src={`${env.IMAGES_HOST}/${project?.images[0]?.url}`} />
      </Block>
      <Block bg="secondary">
        <Strong primary size2 center>
          {project.name}
        </Strong>
        <P>{project.description}</P>
      </Block>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
