import ProjectDetailsStyled from './style';
import { A, Block, H2, P } from '../../../styles';

import Link from 'next/link';
import env from '../../../config/env';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Links from './Links';
import Techs from './Techs';
import { Title } from '../../common';
import Images from './Images';

const ProjectDetails = ({ project }) => {
  return (
    <ProjectDetailsStyled>
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
        <Block grid cols="1fr 1fr" className={'project__info'}>
          <Links links={project?.links} />
          <Techs techs={project?.technologies} />
        </Block>
      </Block>
    </ProjectDetailsStyled>
  );
};

export default ProjectDetails;
