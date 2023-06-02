import React, { useState } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onUpdateStatus = option => {
    if (option === 'good') setGood(prevState => prevState + 1);
    if (option === 'neutral') setNeutral(prevState => prevState + 1);
    if (option === 'bad') setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = Math.round((good / total) * 100);
    return total > 0 ? percentage : 0;
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onUpdateStatus={onUpdateStatus} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            options={options}
            value={{good, neutral, bad}}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
};

//*****USE CLASS */
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleBtnClick = grade => {
//     this.setState(prevState => ({
//       [grade]: prevState[grade] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const percentage = Math.round((this.state.good / total) * 100);
//     return total > 0 ? percentage : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onUpdateState={this.handleBtnClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
