import { Layout } from '../components/layouts';
import { WelcomeScreen, HomeScreen } from '../components/screens';
import { Block } from '../styles';

export default function Home() {
  return (
    <Layout>
      <WelcomeScreen />
      <HomeScreen />
    </Layout>
  );
}
