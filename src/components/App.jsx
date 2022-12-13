import React from 'react';
import { Container } from "./app.styled";
import { Section } from "./section/section"
import { Statistic } from "./statistic/statistic";
import { FeedbackOptions } from "./feedback/buttons";
import { Notification } from './notification/notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 onClick = type => {
    this.setState({ [type]: this.state[type] + 1 });
  };
  
  countTotalFeedback() {
    return (this.state.bad + this.state.neutral + this.state.good)
  };

  countPositiveFeedbackPercentage() {
    let total = this.state.bad + this.state.neutral + this.state.good;
    return ((this.state.good * 100) / total)
  }

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onBtnClick={this.onClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistic
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage() || 0}
            />
          ) : (
              <Notification message="Sorry, no feedback..." />
          )}
        </Section>
      </Container>
    );
  }
};
