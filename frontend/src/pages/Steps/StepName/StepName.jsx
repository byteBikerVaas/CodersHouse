import PropTypes from "prop-types"; // Import PropTypes

const StepName = ({ onNext }) => {
  return (
    <>
      <div>Name Step</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};
StepName.propTypes = {
  onNext: PropTypes.func.isRequired, // Ensure onNext is a function and is required
};
export default StepName;
