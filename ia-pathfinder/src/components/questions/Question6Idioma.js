// ia-pathfinder/components/questions/Question6Idioma.js
import React from 'react';
import styles from './Question.module.css';

const Question6Idioma = ({ value, handleChange }) => {
  return (
    <div className={styles.questionContainer}>
      <label htmlFor="idioma" className={styles.label}>
        ¿En qué idioma prefieres que estén las herramientas de IA o la documentación asociada?
      </label>
      <select
        id="idioma"
        name="idioma"
        className={styles.select}
        value={value}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona un idioma</option>
        <option value="Español">Español</option>
        <option value="Inglés">Inglés</option>
        <option value="Portugués">Portugués</option>
        <option value="Otro">Otro (especificar si es posible)</option>
      </select>
    </div>
  );
};

export default Question6Idioma;
