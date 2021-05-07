import React from 'react';
import { workApi } from '../../apis';
import { HomeLayout } from '../../components/layouts';
import { WorksScreen } from '../../components/screens';

const Jobs = ({ data }) => {
  return (
    <HomeLayout>
      <WorksScreen works={data.payload} msg={data.msg} status={data.status} />
    </HomeLayout>
  );
};

export const getServerSideProps = async (context) => {
  const data = await workApi.getAll();
  return { props: { data } };
};

export default Jobs;
