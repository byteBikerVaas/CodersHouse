import PropTypes from "prop-types"; // Import PropTypes

const StepOtp = ({ onNext }) => {
  return (
    <>
      <div>OTP step</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};
StepOtp.propTypes = {
  onNext: PropTypes.func.isRequired, // Ensure onNext is a function and is required
};
export default StepOtp;
