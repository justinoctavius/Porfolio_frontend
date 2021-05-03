import { useState } from 'react';
import { ShowMsg } from '../../helpers';
import { ProjectScreenStyled } from '../../styles';
import { ProjectCarousel, ProjectDetails, Title } from '../common/';

const ProjectsScreen = ({ projects, msg }) => {
  const [projectSelected, setProjectSelected] = useState({ id: '', index: 0 });

  if (msg != 'success') {
    return ShowMsg.error(msg);
  }
  return (
    <ProjectScreenStyled>
      <Title center>Projects</Title>
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
