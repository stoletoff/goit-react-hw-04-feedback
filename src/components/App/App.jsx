import { Component } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = grade => {
    this.setState(prevState => ({
      [grade]: prevState[grade] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.round((this.state.good / total) * 100);
    return total > 0 ? percentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onUpdateState={this.handleBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}
