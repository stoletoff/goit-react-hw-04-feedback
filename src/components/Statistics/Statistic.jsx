import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './Statistic.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsList>
    <StatisticsItem>
      <StatisticsText>Good: {good}</StatisticsText>
    </StatisticsItem>
    <StatisticsItem>
      <StatisticsText>Neutral: {neutral}</StatisticsText>
    </StatisticsItem>
    <StatisticsItem>
      <StatisticsText>Bad: {bad}</StatisticsText>
    </StatisticsItem>
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


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
