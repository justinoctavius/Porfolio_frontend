import ProjectDetailsStyled from './style';
import { Block, P } from '../../../styles';

import { Title, ToggleShowBtn } from '../../common';
import Images from './Images';
import { useState } from 'react';
import Info from './Info';

const ProjectDetails = ({ project, show, setShow }) => {
  return (
    <ProjectDetailsStyled show={show}>
      <ToggleShowBtn show={true} setShow={setShow} className="showBtn" />
      <Images images={project?.images} className={'project__images'} />
      <Block className={'project__detailsContainer'}>
        <Block className={'project__titleBox'}>
          <Title m0 p1 center>
            {project?.name}
          </Title>
        </Block>
        <Block className={'project__descriptionBox'}>
          <P center>{project?.description}</P>
        </Block>
        <Info links={project?.links} technologies={project?.technologies} />
      </Block>
    </ProjectDetailsStyled>
  );
};

export default ProjectDetails;
