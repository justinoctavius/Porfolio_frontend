import { useState } from 'react';
import { ShowMsg } from '../../../../helpers';
import ProjectScreenStyled from './style';
import { ProjectCollection, ProjectDetails } from '../../../blocks';
import { Title } from '../../../common';
import { Block } from '../../../../styles';

const ProjectsScreen = ({ projects, msg, status }) => {
  const [projectSelected, setProjectSelected] = useState({ id: '', index: 0 });

  if (status != 200) {
    return ShowMsg.error(msg);
  }

  if (projects.length === 0) {
    return ShowMsg.error("There aren't projects");
  }
  return (
    <ProjectScreenStyled>
      <Block>
        <Title center>Projects</Title>
      </Block>
      <ProjectDetails project={projects[projectSelected.index]} />
      <ProjectCollection
        projects={projects}
        selected={projectSelected}
        setSelected={setProjectSelected}
      />
    </ProjectScreenStyled>
  );
};

export default ProjectsScreen;
