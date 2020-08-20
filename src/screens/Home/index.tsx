import React from 'react';
import {Container} from './styles';

import HomeHeader from '../../components/HomeHeader';
import Playlist from '../../components/Playlist';

const Home: React.FC = () => (
  <Container>
    <HomeHeader />
    <Playlist />
  </Container>
);

export default Home;
