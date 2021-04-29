import React from 'react';
import { workApi } from '../../apis';
import { Layout } from '../../components/layouts';
import { WorksScreen } from '../../components/screens';

const Jobs = ({ data }) => {
  return (
    <Layout>
      <WorksScreen works={data.payload} msg={data.msg} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const data = await workApi.getAll();
  return { props: { data } };
};

export default Jobs;
