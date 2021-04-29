import { Layout } from '../components/layouts';
import { WelcomeScreen, HomeScreen } from '../components/screens';
import { Block } from '../styles';

export default function Home() {
  return (
    <Layout next={'/projects'}>
      <Block display={'grid'}>
        <WelcomeScreen />
        <HomeScreen />
      </Block>
    </Layout>
  );
}
