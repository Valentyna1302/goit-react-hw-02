import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={s.list}>
        {Object.entries(feedback).map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </li>
        ))}
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
