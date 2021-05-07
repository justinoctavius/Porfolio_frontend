import React from 'react';
import { projectApi } from '../../apis';
import { HomeLayout } from '../../components/layouts';
import { ProjectsScreen } from '../../components/screens';

const Projects = ({ data }) => {
  return (
    <HomeLayout>
      <ProjectsScreen
        projects={data.payload}
        msg={data.msg}
        status={data.status}
      />
    </HomeLayout>
  );
};

export const getServerSideProps = async (context) => {
  const data = await projectApi.getAll();

  return { props: { data } };
};

export default Projects;
