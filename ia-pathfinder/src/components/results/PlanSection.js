// ia-pathfinder/src/components/results/PlanSection.js
import React from 'react';
import styles from './PlanSection.module.css';

const PlanSection = ({ plan }) => {
  if (!plan || plan.length === 0) return null;

  return (
    <section className={styles.planSection}>
      <h2 className={styles.heading}>Tu Micro Plan de Implementación Semanal</h2>
      <ol className={styles.planList}>
        {plan.map((step, index) => (
          <li key={index} className={styles.planStep}>
            <span className={styles.stepNumber}>{index + 1}.</span> {step}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default PlanSection;
