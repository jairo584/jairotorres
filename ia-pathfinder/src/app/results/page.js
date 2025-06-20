// ia-pathfinder/src/app/results/page.js
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useResultContext } from '@/context/ResultContext';
import ProfileSection from '@/components/results/ProfileSection';
import ToolsSection from '@/components/results/ToolsSection';
import PlanSection from '@/components/results/PlanSection';
import styles from './ResultsPage.module.css';

const ResultsPage = () => {
  const { results } = useResultContext();
  const router = useRouter();

  useEffect(() => {
    if (!results) {
      // Optional: redirect back to quiz if no results are found after a short delay
      // This handles direct navigation or refresh issues.
      // For now, we'll just show a message, but redirection is a common pattern.
      // setTimeout(() => router.push('/quiz'), 3000); // Example redirect
    }
  }, [results, router]);

  if (!results) {
    return (
      <div className={styles.resultsContainer}>
        <div className={styles.noResults}>
          <h2>No hay resultados para mostrar.</h2>
          <p>Por favor, completa el cuestionario primero para obtener tu hoja de ruta personalizada.</p>
          <button onClick={() => router.push('/quiz')} className={styles.actionButton}>
            Ir al Cuestionario
          </button>
        </div>
      </div>
    );
  }

  const { perfil, recomendaciones, plan } = results;

  return (
    <div className={styles.resultsContainer}>
      <header className={styles.header}>
        <h1>¡Aquí tienes tu Hoja de Ruta IA Personalizada!</h1>
        <p>Basado en tus respuestas, hemos identificado algunas áreas y herramientas que podrían ayudarte.</p>
      </header>

      <ProfileSection perfil={perfil} />
      <ToolsSection recomendaciones={recomendaciones} />
      <PlanSection plan={plan} />

      <footer className={styles.footer}>
        <p>Recuerda: la IA es una herramienta. Empieza pequeño, sé constante y ajusta según tus necesidades.</p>
        <button onClick={() => window.print()} className={styles.printButton}>
          Imprimir Hoja de Ruta
        </button>
        <button onClick={() => router.push('/quiz')} className={styles.actionButton}>
            Volver al Cuestionario
        </button>
      </footer>
    </div>
  );
};

export default ResultsPage;
