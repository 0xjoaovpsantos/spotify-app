import React from 'react';
import {Container} from './styles';

import HomeHeader from '../../components/HomeHeader';
import ListOfPlaylists from '../../components/ListOfPlaylists';

const Home: React.FC = () => (
  <Container>
    <HomeHeader />
    <ListOfPlaylists />
  </Container>
);

export default Home;
