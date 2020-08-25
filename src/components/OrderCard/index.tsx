import React, { useMemo, useState, useCallback } from 'react';

import InfoOrderModal from '../InfoOrderModal';
import { useOrder } from '../../hooks/order';

import {
  Container,
  TopSide,
  PackageIcon,
  Info,
  UnderSide,
  Avatar,
  Status,
  BallIcon,
} from './styles';

interface OrderInfo {
  order_id: string;
  street: string;
  city: string;
  zipcode: string;
  withdrawalDate: string;
  deliveryDate: string;
}

interface OrderProps {
  order_info: {
    id: string;
    recipient_name: string;
    street: string;
    city: string;
    deliverer_avatar: string;
    deliverer_name: string;
    status: 'delivered' | 'pending' | 'withdrawal' | 'canceled';
    zipcode: string;
    withdrawalDate: string;
    deliveryDate: string;
    product: string;
  };
}

const OrderCard: React.FC<OrderProps> = ({ order_info }) => {
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [, setOrderInfo] = useState<OrderInfo>({} as OrderInfo);
  const { loadOrder } = useOrder();

  const toggleInfoModal = useCallback(() => {
    setOpenInfoModal(!openInfoModal);
  }, [openInfoModal]);

  const handleSetAddress = useCallback(() => {
    setOrderInfo({
      order_id: order_info.id,
      city: order_info.city,
      street: order_info.street,
      zipcode: order_info.zipcode,
      withdrawalDate: order_info.withdrawalDate,
      deliveryDate: order_info.deliveryDate,
    });
  }, [order_info]);

  const typeDeliveryStatus = useMemo(() => {
    return {
      delivered: 'Entregue',
      pending: 'Pendente',
      withdrawal: 'Retirada',
      canceled: 'Cancelada',
    };
  }, []);

  return (
    <Container>
      <TopSide>
        <header>
          <PackageIcon />
          {order_info.recipient_name}
        </header>

        <Info>
          <li>
            <strong>Pedido:</strong>
            <span>{order_info.id}</span>
          </li>
          <li>
            <span>{order_info.street}</span>
          </li>
          <li>
            <span>{order_info.city}</span>
          </li>
        </Info>
      </TopSide>

      <UnderSide>
        <div>
          <Avatar
            src={
              order_info.deliverer_avatar ||
              `https://ui-avatars.com/api/?size=128&background=5B4699&color=fff&name=${order_info.deliverer_name}`
            }
            alt={order_info.deliverer_name}
          />
          {order_info.deliverer_name}
        </div>

        <section>
          <strong>Status: </strong>
          <Status type={order_info.status}>
            <BallIcon />
            <span>{typeDeliveryStatus[order_info.status]}</span>
          </Status>
        </section>

        <button
          type="button"
          onClick={() => {
            loadOrder({
              recipient: {
                name: order_info.recipient_name,
              },
              deliveryman: {
                name: order_info.deliverer_name,
              },
              product: order_info.product,
            });
            handleSetAddress();
            setOpenInfoModal(true);
          }}
        >
          Detalhes
        </button>
      </UnderSide>

      {openInfoModal && (
        <InfoOrderModal
          setOpenModal={toggleInfoModal}
          order_info={order_info}
        />
      )}
    </Container>
  );
};

export default OrderCard;
