import { useState } from 'react';
import { ShowMsg } from '../../../../helpers';
import ProjectScreenStyled from './style';
import { ProjectCollection, ProjectDetails } from '../../../blocks';
import { Title } from '../../../common';
import { Block } from '../../../../styles';

const ProjectsScreen = ({ projects, msg, status }) => {
  const [projectSelected, setProjectSelected] = useState({ id: '', index: 0 });
  const [showDetails, setShowDetails] = useState(false);

  const setProjectSelectedHandler = ({ index, id }) => {
    setProjectSelected({ index, id });
    setShowDetails(true);
  };

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
      <ProjectDetails
        project={projects[projectSelected.index]}
        show={showDetails}
        setShow={setShowDetails}
      />
      <ProjectCollection
        projects={projects}
        selected={projectSelected}
        setSelected={setProjectSelectedHandler}
      />
    </ProjectScreenStyled>
  );
};

export default ProjectsScreen;
