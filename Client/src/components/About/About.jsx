import React from "react";
import styles from "./About.module.css";
import yo from "../About/yo.jpg";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.personcontainer}>
        <h1>Jonnathan
        <br />
        (creador de la pagina)
        </h1>
        <img src={yo} alt="Jonnathan" className={styles.image} />
      </div>
      <div className={styles.info}>
        <h2>STATUS: Alive</h2>
        <h2>SPECIES: Human</h2>
        <h2>GENDER: Male</h2>
        <h2>ORIGIN: Earth</h2>
      </div>
    </div>
  );
}

//si coloco p en lugar de h2 me reconoce la p de forms, toca editarlo
