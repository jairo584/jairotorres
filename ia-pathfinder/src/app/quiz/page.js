// ia-pathfinder/src/app/quiz/page.js
import React from 'react';
import WizardForm from '@/components/WizardForm';
import styles from './QuizPage.module.css'; // Import CSS Module

const QuizPage = () => {
  return (
    <div className={styles.quizPageContainer}>
      <h1>Bienvenido al Asistente de IA Pathfinder</h1>
      <p>Completa este breve cuestionario para descubrir herramientas de IA que pueden ayudarte.</p>
      <WizardForm />
    </div>
  );
};

export default QuizPage;
