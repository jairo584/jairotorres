// ia-pathfinder/components/questions/Question3Tareas.js
import React from 'react';
import styles from './Question.module.css';

const Question3Tareas = ({ value, handleChange }) => {
  return (
    <div className={styles.questionContainer}>
      <label htmlFor="tareas" className={styles.label}>
        ¿Qué tipo de tareas o procesos sientes que consumen la mayor parte de tu tiempo o el de tu equipo?
      </label>
      <textarea
        id="tareas"
        name="tareas"
        className={styles.textarea}
        value={value}
        onChange={handleChange}
        placeholder="Ej: Responder correos electrónicos, Generar reportes semanales, Transcribir reuniones, Buscar información específica"
        rows="4"
        required
      />
      <small className={styles.smallText}>Más adelante podrás seleccionar de una lista o añadir más detalles.</small>
    </div>
  );
};

export default Question3Tareas;
