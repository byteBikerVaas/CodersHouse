import PropTypes from "prop-types"; // Import PropTypes
const StepPhoneEmail = ({ onNext }) => {
  return (
    <>
      <div>Phone or Email Component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};
StepPhoneEmail.propTypes = {
  onNext: PropTypes.func.isRequired, // Ensure onNext is a function and is required
};
export default StepPhoneEmail;
