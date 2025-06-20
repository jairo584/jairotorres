// ia-pathfinder/components/questions/Question2ObjetivoIA.js
import React from 'react';
import styles from './Question.module.css';

const Question2ObjetivoIA = ({ value, handleChange }) => {
  return (
    <div className={styles.questionContainer}>
      <label htmlFor="objetivoIA" className={styles.label}>
        ¿Cuál es tu principal objetivo al querer implementar IA en tu trabajo o proyecto?
      </label>
      <textarea
        id="objetivoIA"
        name="objetivoIA"
        className={styles.textarea}
        value={value}
        onChange={handleChange}
        placeholder="Ej: Automatizar tareas repetitivas, Analizar grandes volúmenes de datos, Mejorar la toma de decisiones, Personalizar la experiencia del cliente"
        rows="4"
        required
      />
    </div>
  );
};

export default Question2ObjetivoIA;
