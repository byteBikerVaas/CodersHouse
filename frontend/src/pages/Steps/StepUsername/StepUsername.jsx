import PropTypes from "prop-types"; // Import PropTypes

const StepUsername = ({ onNext }) => {
  return (
    <>
      <div>Username Component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};
StepUsername.propTypes = {
  onNext: PropTypes.func.isRequired, // Ensure onNext is a function and is required
};
export default StepUsername;
