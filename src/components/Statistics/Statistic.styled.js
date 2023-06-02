import styled from 'styled-components';

export const StatisticsList = styled.ul`
  padding: 0 auto;
  margin: 0 auto;
  text-align: left;
  font-size: 20px;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  &:not(:last-child) {
  margin-bottom: 10px;
}

  &:nth-last-child(-n + 2) {
    font-weight: 700;
  }
`;

export const StatisticsText = styled.p``;
