import React from 'react';
import {View} from 'react-native';

import Search from '../../components/Search';
import Button from '../../components/Button';
import SubItem from '../../components/SubItem';
import Title from '../../components/Title';

const Home: React.FC = () => (
  <View>
    <Title />
    <Search />
    <Button />
    <SubItem />
  </View>
);

export default Home;
