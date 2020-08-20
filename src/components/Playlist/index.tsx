import React from 'react';
import {Container, Square, Description, Name, NumberMusics} from './styles';

const Playlist: React.FC = () => (
  <Container>
    <Square />
    <Description>
      <Name>Culto Start</Name>
      <NumberMusics>1283728182 músicas</NumberMusics>
    </Description>
  </Container>
);

export default Playlist;
