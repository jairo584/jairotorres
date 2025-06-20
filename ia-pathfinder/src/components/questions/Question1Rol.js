// ia-pathfinder/components/questions/Question1Rol.js
import React from 'react';
import styles from './Question.module.css';

const Question1Rol = ({ value, handleChange }) => {
  return (
    <div className={styles.questionContainer}>
      <label htmlFor="rol" className={styles.label}>
        ¿Cuál es tu rol actual o el área en la que trabajas principalmente?
      </label>
      <input
        type="text"
        id="rol"
        name="rol"
        className={styles.input}
        value={value}
        onChange={handleChange}
        placeholder="Ej: Marketing Digital, Desarrollo de Software, Ventas"
        required
      />
    </div>
  );
};

export default Question1Rol;
