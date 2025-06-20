// ia-pathfinder/components/questions/Question5Comodidad.js
import React from 'react';
import styles from './Question.module.css';

const Question5Comodidad = ({ value, handleChange }) => {
  return (
    <div className={styles.questionContainer}>
      <label htmlFor="comodidad" className={styles.label}>
        En una escala del 1 al 5, ¿qué tan cómodo/a te sientes aprendiendo y adaptándote a nuevas herramientas tecnológicas? (1 = Muy incómodo, 5 = Muy cómodo)
      </label>
      <select
        id="comodidad"
        name="comodidad"
        className={styles.select}
        value={value}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona una opción</option>
        <option value="1">1 - Muy incómodo</option>
        <option value="2">2 - Incómodo</option>
        <option value="3">3 - Neutral</option>
        <option value="4">4 - Cómodo</option>
        <option value="5">5 - Muy cómodo</option>
      </select>
    </div>
  );
};

export default Question5Comodidad;
