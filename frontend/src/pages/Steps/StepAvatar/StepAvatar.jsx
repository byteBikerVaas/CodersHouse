import PropTypes from "prop-types"; // Import PropTypes

const StepAvatar = ({ onNext }) => {
  return (
    <>
      <div>Avatar step</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};
StepAvatar.propTypes = {
  onNext: PropTypes.func.isRequired, // Ensure onNext is a function and is required
};
export default StepAvatar;
