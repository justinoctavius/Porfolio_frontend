import ProjectDetailsStyled from './style';
import { A, Block, H2, P } from '../../../styles';

import Link from 'next/link';
import env from '../../../config/env';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Links from './Links';
import Techs from './Techs';
import { Title } from '../../common';

const ProjectDetails = ({ project }) => {
  return (
    <ProjectDetailsStyled>
      <Block>
        <img src={`${env.IMAGES_HOST}/${project?.images[0]?.url}`} />
      </Block>
      <Block>
        <Block>
          <Title m0 p1 center>
            {project?.name}
          </Title>
        </Block>
        <Block>
          <P center>{project?.description}</P>
        </Block>
        <Block grid cols="1fr 1fr">
          <Links links={project?.links} />
          <Techs techs={project?.technologies} />
        </Block>
      </Block>
    </ProjectDetailsStyled>
  );
};

export default ProjectDetails;
