import React from 'react';
import { projectApi } from '../../apis';
import { Layout } from '../../components/layouts';
import { ProjectsScreen } from '../../components/screens';

const Projects = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <ProjectsScreen projects={data.payload} msg={data.msg} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const data = await projectApi.getAll();

  return { props: { data } };
};

export default Projects;
