import React from 'react';
import { studyApi } from '../apis';
import { HomeLayout } from '../components/layouts';
import { StudiesScreen } from '../components/screens';

const Studies = ({ data }) => {
  return (
    <HomeLayout>
      <StudiesScreen
        studies={data.payload}
        msg={data.msg}
        status={data.status}
      />
    </HomeLayout>
  );
};

export const getServerSideProps = async () => {
  const data = await studyApi.getAll();
  return {
    props: { data },
  };
};

export default Studies;
