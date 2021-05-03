import { A, Block, H2, P, ProjectDetailsStyled } from '../../styles';
import Link from 'next/link';
import env from '../../config/env';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectDetails = ({ project }) => {
  return (
    <ProjectDetailsStyled>
      <Block>
        <img src={`${env.IMAGES_HOST}/${project?.images[0]?.url}`} />
      </Block>
      <Block>
        <Block>
          <H2 center primary>
            {project?.name}
          </H2>
          <P center primary>
            {project?.description}
          </P>
        </Block>
        <Block>
          <Block p1>
            <H2 p1 size2 primary center>
              Links
            </H2>
            {project?.links?.map((link) => (
              <A href={link.url} key={link.link_id} primary size={'1.2em'} bold>
                <FontAwesomeIcon icon={faLink} /> {link.name}
              </A>
            ))}
          </Block>
          <Block display="flex" justify="center">
            <Link href={`/projects/${project?.project_id}`}>
              <A size2 bold third>
                Ver mas
              </A>
            </Link>
          </Block>
        </Block>
      </Block>
    </ProjectDetailsStyled>
  );
};

export default ProjectDetails;
