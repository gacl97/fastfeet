import React from 'react';

import { Container, ReportIcon, Info, Footer } from './styles';

interface ProblemProps {
  id: string;
  description: string;
  created_at: string;
}

const DeliveryProblemCardDeliverer: React.FC<ProblemProps> = ({
  id,
  description,
  created_at,
}) => {
  return (
    <>
      <Container>
        <header>
          <span>
            <ReportIcon />
            <h1>Problema na entrega</h1>
          </span>
        </header>

        <Info>
          <span>
            <strong>id: </strong>
            {id}
          </span>
          <span>
            <strong>Descrição: </strong>
            {description}
          </span>
        </Info>

        <Footer>
          <section>
            <h1>Dia do problema</h1>
            <span id="date">{created_at}</span>
          </section>
        </Footer>
      </Container>
    </>
  );
};

export default DeliveryProblemCardDeliverer;
