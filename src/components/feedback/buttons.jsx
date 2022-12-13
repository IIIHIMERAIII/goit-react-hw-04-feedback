import PropTypes from "prop-types";
import { ButtonList, ListItem, Button } from "./buttons.styled";

export const FeedbackOptions = ({options, onBtnClick}) => {
    return (
        <ButtonList>
            {options.map(option => {
                return (
                <ListItem key={option}>
                    <Button onClick={() => onBtnClick(option)} type="button">{option.charAt(0).toUpperCase() + option.slice(1)}</Button>
                </ListItem>)
            })}
        </ButtonList>
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};