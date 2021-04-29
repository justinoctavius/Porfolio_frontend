import { useState } from 'react';
import { ShowMsg } from '../../helpers';
import { Block, H1, ProjectScreenStyled } from '../../styles';
import { ProjectCarousel, ProjectDetails } from '../common/';

const ProjectsScreen = ({ projects, msg }) => {
  const [projectSelected, setProjectSelected] = useState({ id: '', index: 0 });

  if (msg != 'success') {
    return ShowMsg.error(msg);
  }
  return (
    <ProjectScreenStyled>
      <Block p2>
        <H1 center>Projects</H1>
      </Block>
      <ProjectDetails project={projects[projectSelected.index]} />
      <ProjectCarousel
        projects={projects}
        selected={projectSelected}
        setSelected={setProjectSelected}
      />
    </ProjectScreenStyled>
  );
};

export default ProjectsScreen;
