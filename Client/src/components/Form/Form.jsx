import { useState } from "react";
import validation from "../../utils/validation";
import styles from "./Form.module.css";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <p className={styles.warning}>{errors.email}</p>

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p className={styles.warning}>{errors.password}</p>

        <button className={styles.boton} type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
