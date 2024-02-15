import PropTypes from "prop-types"; // Import PropTypes
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <img className={styles.arrow} src="/arrow_forward.png" alt="arrow" />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired, // Ensure text is a string and is required
  onClick: PropTypes.func.isRequired,
};

export default Button;
