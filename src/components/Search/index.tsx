import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {Container, Input} from './styles';

const Search: React.FC = () => (
  <Container>
    <Icon name="search" size={20} color="#838383" />
    <Input
      placeholder="Procure entre playlists"
      placeholderTextColor="#838383"
    />
  </Container>
);

export default Search;
