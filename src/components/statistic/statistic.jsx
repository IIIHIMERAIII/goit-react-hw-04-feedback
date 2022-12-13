import PropTypes from "prop-types";
import {StatList, StatItem} from "./statistic.styled"
export const Statistic = ({
    good,
    bad,
    neutral,
    total,
    positivePercentage
}) => {
    return (
        <StatList>
                <StatItem>
                    <span>Good: {good}</span>
                </StatItem>
                <StatItem>
                    <span>Neutral: {neutral}</span>
                </StatItem>
                <StatItem>
                    <span>Bad: {bad}</span>
                </StatItem>
                <StatItem>
                    <span>Total: {total}</span>
                </StatItem>
                <StatItem>
                    <span>Positive feedback: {positivePercentage.toFixed(2)}%</span>
                </StatItem>
        </StatList>
    );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};