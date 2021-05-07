import '../styles/reset.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Justin Colon</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
