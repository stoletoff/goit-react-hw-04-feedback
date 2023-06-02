import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './Statistic.styled';

export const Statistics = ({ options, value, total, positivePercentage }) => (
  <StatisticsList>
    {options.map(el => (
      <StatisticsItem key={el + 'key'}>
        {el}: <span>{value[el]}</span>
      </StatisticsItem>
    ))}
    <StatisticsItem>
      <StatisticsText>Total: {total()}</StatisticsText>
    </StatisticsItem>
    <StatisticsItem>
      <StatisticsText>
        Positive feedback: {positivePercentage()}%
      </StatisticsText>
    </StatisticsItem>
  </StatisticsList>
);

