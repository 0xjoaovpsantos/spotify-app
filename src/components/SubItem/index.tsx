import React from 'react';

import {Container, Text} from './styles';

const SubItem: React.FC = ({children}) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

export default SubItem;
