import React from 'react';
import { studyApi } from '../apis';
import { Layout } from '../components/layouts';
import { StudiesScreen } from '../components/screens';

const Studies = ({ data }) => {
  return (
    <Layout>
      <StudiesScreen studies={data.payload} msg={data.msg} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const data = await studyApi.getAll();

  return {
    props: { data },
  };
};

export default Studies;
