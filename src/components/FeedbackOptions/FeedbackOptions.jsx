import PropTypes from 'prop-types';
import { OptionsWrap, OptionBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onUpdateStatus, options }) => (
  <OptionsWrap>
    {options.map(option => (
      <OptionBtn
        key={option}
        type="button"
        onClick={() => onUpdateStatus(option)}
        option={option}
      >
        {option}
      </OptionBtn>
    ))}
  </OptionsWrap>
);

FeedbackOptions.propTypes = {
  onUpdateStatus: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};