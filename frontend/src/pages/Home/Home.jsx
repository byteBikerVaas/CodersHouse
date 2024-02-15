import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";
const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const navigate = useNavigate();
  function startRegister() {
    navigate("/register");
    console.log("Hello");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
        marginLeft: "10px",
      }}
    >
      <Card title="Welcome to CoderHouse" icon="Emoji">
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolorum animi corporis suscipit ut, ratione neque numquam obcaecati
          laboriosam veniam dolore nostrum maiores eius in rerum excepturi sint
          fugit hic.
        </p>
        <div>
          <Button onClick={startRegister} text="Get your Username" />
        </div>
        <div className={styles.signinwrapper}>
          <span className={styles.hasinvite}>Have an invite code? </span>
          <Link style={signInLinkStyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
