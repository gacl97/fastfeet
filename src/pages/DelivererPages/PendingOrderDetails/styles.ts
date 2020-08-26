import styled, { css } from 'styled-components';
import { shade } from 'polished';
import {
  FiTruck,
  FiUser,
  FiMap,
  FiPackage,
  FiCalendar,
  FiActivity,
  FiChevronLeft,
  FiXCircle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';

import { FaCalendarCheck, FaCalendarDay } from 'react-icons/fa';

export const Container = styled.div`
  height: 100%;
  padding: 20px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 45px;
    width: 150px;
    background: #7d40e7;
    color: #fff;
    font-weight: 500;
    border: 0;

    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#7d40e7')};
    }

    @media (max-width: 1025px) {
      width: 100%;
      height: 35px;
    }
  }
`;

export const BackIcon = styled(FiChevronLeft)`
  height: 22px;
  width: 22px;
  margin-right: 3px;
  color: #fff;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1380px;
  margin-top: 20px;
`;

export const MainCards = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;

  @media (max-width: 1025px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: #7d40e7;
  padding: 20px;
  border-radius: 4px;

  width: 100%;

  > header {
    display: flex;
    align-items: center;

    > h1 {
      font-size: 20px;
      color: #fff;
    }
  }

  & + div {
    margin-left: 20px;
  }

  @media (max-width: 1025px) {
    padding: 10px;

    & + div {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

export const TruckIcon = styled(FiTruck)`
  height: 25px;
  width: 25px;
  margin-right: 10px;
  color: #e6af2e;
`;

export const Content = styled.div`
  padding: 0 10px;
  margin-top: 12px;

  > h1 {
    font-size: 18px;
    color: #fff;

    display: flex;
    align-items: center;

    margin-bottom: 5px;
  }

  span + h1 {
    margin-top: 10px;
  }

  span {
    margin-left: 30px;
    color: #fff;
  }
`;

const IconsStyle = css`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  color: #e6af2e;
`;

export const UserIcon = styled(FiUser)`
  ${IconsStyle}
`;

export const MapIcon = styled(FiMap)`
  ${IconsStyle}
`;

export const PackageIcon = styled(FiPackage)`
  ${IconsStyle}
`;

export const ActivityIcon = styled(FiActivity)`
  ${IconsStyle}
`;

export const CalendarCheckIcon = styled(FaCalendarCheck)`
  ${IconsStyle}
`;

export const CalendarDayIcon = styled(FaCalendarDay)`
  ${IconsStyle}
`;

export const CalendarIcon = styled(FiCalendar)`
  height: 25px;
  width: 25px;
  margin-right: 10px;
  color: #e6af2e;
`;

export const DateContent = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateView = styled.div`
  > h1 {
    font-size: 18px;
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }

  > span {
    margin-left: 30px;
  }
`;

export const ContainerFooter = styled.div`
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 45px;
    width: 100%;
    border: 0;
    background: #0000001a;

    & + button {
      margin-left: 50px;
    }

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#0000001a')};
    }
  }

  @media (max-width: 1025px) {
    margin-top: 20px;
    flex-direction: column;

    button {
      & + button {
        margin-left: 0;
        margin-top: 10px;
      }
    }
  }
`;

const FooterIconStyle = css`
  margin-right: 5px;
  height: 20px;
  width: 20px;
`;

export const CircleIcon = styled(FiXCircle)`
  ${FooterIconStyle}
`;

export const InfoIcon = styled(FiInfo)`
  ${FooterIconStyle}
`;

export const CheckCircleIcon = styled(FiCheckCircle)`
  ${FooterIconStyle}
`;
