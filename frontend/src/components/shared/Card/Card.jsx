import styles from "./Card.module.css";

import PropTypes from "prop-types"; // Import PropTypes

const Card = ({ title, icon, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img src={`/${icon}.png`} alt="logo" />
        <h1
          style={{ fontSize: "22px", fontWeight: "bold", marginLeft: "10px" }}
        >
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired, // Ensure title is a string and is required
  icon: PropTypes.string.isRequired, // Example validation for icon
  children: PropTypes.node, // Example validation for children
};

export default Card;
