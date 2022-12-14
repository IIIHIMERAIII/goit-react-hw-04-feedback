import React, { useState } from 'react';
import { Container } from "./app.styled";
import { Section } from "./section/section"
import { Statistic } from "./statistic/statistic";
import { FeedbackOptions } from "./feedback/buttons";
import { Notification } from './notification/notification';



const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });


  const onClick = type => {
    setFeedback(state => ({
      ...state,
      [type]: state[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return (feedback.bad + feedback.neutral + feedback.good)
  };

  const countPositiveFeedbackPercentage = () => {
    let total = feedback.bad + feedback.neutral + feedback.good;
    return ((feedback.good * 100) / total)
  }

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onBtnClick={onClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistic
            good={feedback.good}
            bad={feedback.bad}
            neutral={feedback.neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage() || 0}
          />
        ) : (
          <Notification message="Sorry, no feedback..." />
        )}
      </Section>
    </Container>
  );
};

export { App };