import { Link } from "react-router-dom"; // doesnt let the page refresh
import styles from "./Navigation.module.css";
const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
  };
  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img src="/Emoji.png" alt="logo" />
        <span style={logoText}>Coders House</span>
      </Link>
    </nav>
  );
};

export default Navigation;
