import type { NextPage } from 'next';
import TestComponent from 'stories/TestComponent';

import screenShot from '../public/image.png';

const Home: NextPage = () => {
  return <TestComponent title='타이틀' contents={['1', '2', '3', '4']} size={30} url={screenShot.src} />;
};

export default Home;
