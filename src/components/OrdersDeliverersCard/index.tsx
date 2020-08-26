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
  linkPathToDetails: string;
}

const OrdersDeliverersCard: React.FC<OrdersProps> = ({
  id,
  formattedCity,
  product,
  status,
  formattedStartDate,
  linkPathToDetails,
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
                color="#e6af2e"
                style={{
                  background: '#e6af2e',
                }}
              />
              <span>Aguardando retirada</span>
            </LineStatusCircle>

            <LineStatusCircle>
              <FiCircle
                color={status !== 'pending' ? '#e6af2e' : '#fff'}
                style={{
                  background: status !== 'pending' ? '#e6af2e' : '#fff',
                }}
              />
              <span>Retirada</span>
            </LineStatusCircle>

            <LineStatusCircle>
              <FiCircle
                color={status === 'delivered' ? '#e6af2e' : '#fff'}
                style={{
                  background: status === 'delivered' ? '#e6af2e' : '#fff',
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

          <Link to={`${linkPathToDetails}${id}`}>ver detalhes</Link>
        </Footer>
      </Container>
    </>
  );
};

export default OrdersDeliverersCard;
