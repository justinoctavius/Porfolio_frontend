import { HomeLayout } from '../components/layouts';
import { WelcomeScreen, HomeScreen } from '../components/screens';

export default function Home() {
  return (
    <HomeLayout>
      <WelcomeScreen />
      <HomeScreen />
    </HomeLayout>
  );
}
