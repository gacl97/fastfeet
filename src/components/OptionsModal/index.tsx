import React from 'react';

import { Container, Content, ContentItem } from './styles';

const OptionsModal: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <Content>
          <ContentItem>{children}</ContentItem>
        </Content>
      </Container>
    </>
  );
};

export default OptionsModal;
