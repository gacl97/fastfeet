import React from 'react';
import { FiTruck, FiCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  Info,
  Status,
  LineStatus,
  LineStatusCircle,
  Footer,
} from './styles';

interface OrdersProps {
  id: string;
  formattedCity: string;
  product: string;
  status: 'delivered' | 'pending' | 'withdrawal' | 'canceled';
  formattedStartDate: string;
}

const AvailableOrdersCard: React.FC<OrdersProps> = ({
  id,
  formattedCity,
  product,
  status,
  formattedStartDate,
}) => {
  return (
    <>
      <Container>
        <header>
          <span>
            <FiTruck />
            <h1>{formattedCity}</h1>
          </span>
        </header>

        <Info>
          <span>
            <strong>id: </strong>
            {id}
          </span>
          <span>
            <strong>Produto: </strong>
            {product}
          </span>
        </Info>

        <Status>
          <LineStatus>
            <LineStatusCircle>
              <FiCircle
                color={status === 'pending' ? '#e6af2e' : '#fff'}
                style={{
                  background: status === 'pending' ? '#e6af2e' : '#fff',
                }}
              />
              <span>Aguardando retirada</span>
            </LineStatusCircle>

            <LineStatusCircle>
              <FiCircle
                color={status === 'pending' ? '#fff' : '#e6af2e'}
                style={{
                  background: status === 'pending' ? '#fff' : '#e6af2e',
                }}
              />
              <span>Retirada</span>
            </LineStatusCircle>

            <LineStatusCircle>
              <FiCircle
                color={status === 'pending' ? '#fff' : '#e6af2e'}
                style={{
                  background: status === 'pending' ? '#fff' : '#e6af2e',
                }}
              />
              <span>Entregue</span>
            </LineStatusCircle>
          </LineStatus>
        </Status>

        <Footer>
          <section>
            <h1>Data da retirada</h1>
            <span id="date">{formattedStartDate}</span>
          </section>

          <Link to={`/details/${id}`}>ver detalhes</Link>
        </Footer>
      </Container>
    </>
  );
};

export default AvailableOrdersCard;
