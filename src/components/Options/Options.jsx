const Options = ({
  feedback,
  updateFeedback,
  handleResetClick,
  totalFeedback,
}) => {
  const btnOptions = Object.keys(feedback);

  return (
    <div>
      {btnOptions.map((option) => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={() => handleResetClick()}>Reset</button>
      )}
    </div>
  );
};

export default Options;
