import React from 'react';
import {Container, ContainerSearch} from './styles';

import Title from '../Title';
import SubItem from '../SubItem';
import Search from '../Search';
import Button from '../Button';

const HomeHeader: React.FC = () => (
  <Container>
    <Title>Músicas</Title>
    <SubItem>Playlists</SubItem>
    <ContainerSearch>
      <Search />
      <Button />
    </ContainerSearch>
  </Container>
);

export default HomeHeader;
