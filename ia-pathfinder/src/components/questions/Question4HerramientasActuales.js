// ia-pathfinder/components/questions/Question4HerramientasActuales.js
import React from 'react';
import styles from './Question.module.css';

const Question4HerramientasActuales = ({ value, handleChange }) => {
  return (
    <div className={styles.questionContainer}>
      <label htmlFor="herramientasActuales" className={styles.label}>
        ¿Qué herramientas o software utilizas regularmente en tu trabajo actual?
      </label>
      <textarea
        id="herramientasActuales"
        name="herramientasActuales"
        className={styles.textarea}
        value={value}
        onChange={handleChange}
        placeholder="Ej: Slack, Microsoft Excel, Google Analytics, Salesforce, Figma, Jira"
        rows="4"
        required
      />
    </div>
  );
};

export default Question4HerramientasActuales;
