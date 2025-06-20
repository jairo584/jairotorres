// ia-pathfinder/src/components/results/ToolsSection.js
import React from 'react';
import styles from './ToolsSection.module.css';

const ToolsSection = ({ recomendaciones }) => {
  if (!recomendaciones || recomendaciones.length === 0) return null;

  return (
    <section className={styles.toolsSection}>
      <h2 className={styles.heading}>Herramientas IA Recomendadas</h2>
      <div className={styles.toolsGrid}>
        {recomendaciones.map((tool, index) => (
          <div key={index} className={styles.toolCard}>
            <h3 className={styles.toolName}>{tool.nombre}</h3>
            <p className={styles.toolPurpose}><strong>Propósito:</strong> {tool.proposito}</p>
            <p className={styles.toolBenefit}><strong>Beneficio Clave:</strong> {tool.beneficio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
