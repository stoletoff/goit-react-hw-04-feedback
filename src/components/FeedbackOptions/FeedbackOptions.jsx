import PropTypes from 'prop-types';
import { OptionsWrap, OptionBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onUpdateState, options }) => (
  <OptionsWrap>
    {options.map(option => (
      <OptionBtn
        key={option}
        type="button"
        onClick={() => onUpdateState(option)}
        option={option}
      >
        {option}
      </OptionBtn>
    ))}
  </OptionsWrap>
);

FeedbackOptions.propTypes = {
  onUpdateState: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};