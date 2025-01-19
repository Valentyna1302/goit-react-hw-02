import s from "./Options.module.css";

const Options = ({
  feedback,
  updateFeedback,
  handleResetClick,
  totalFeedback,
}) => {
  const btnOptions = Object.keys(feedback);

  return (
    <div className={s.optionsContainer}>
      {btnOptions.map((option) => (
        <button
          className={s.button}
          key={option}
          onClick={() => updateFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={s.button} onClick={() => handleResetClick()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
