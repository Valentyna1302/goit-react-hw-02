const Feedback = ({ feedback }) => {
  return (
    <div>
      <ul>
        {Object.entries(feedback).map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
