import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 1,
    neutral: 0,
    bad: 0
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good+neutral+bad)
  }

  countPositiveFeedbackPercentage = () => {
    return (this.state.good/this.countTotalFeedback()*100)
  }

  FeedbackCounter = (button, value) => {
    this.setState({ good: 3 });
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state} onLeaveFeedback={this.FeedbackCounter}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage().toFixed(2)}
          />
        </Section>
      </div>
    );
  }
}

const Section = ({ title, children }) => {
  return <div className='section'>
  <p>{title}</p>
    <div>{children}</div>
    </div>
}
