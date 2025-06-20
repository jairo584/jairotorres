// ia-pathfinder/components/WizardForm.js
import React, { useState, useEffect } from 'react'; // useEffect might be needed if redirecting based on context
import { useRouter } from 'next/navigation';
import { useResultContext } from '@/context/ResultContext';
import styles from './WizardForm.module.css';
import Question1Rol from '@/components/questions/Question1Rol';
import Question2ObjetivoIA from '@/components/questions/Question2ObjetivoIA';
import Question3Tareas from '@/components/questions/Question3Tareas';
import Question4HerramientasActuales from '@/components/questions/Question4HerramientasActuales';
import Question5Comodidad from '@/components/questions/Question5Comodidad';
import Question6Idioma from '@/components/questions/Question6Idioma';

const TOTAL_STEPS = 6;

const WizardForm = () => {
  const router = useRouter();
  const { setResults } = useResultContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    rol: '',
    objetivoIA: '',
    tareas: '',
    herramientasActuales: '',
    comodidad: '',
    idioma: '',
  });

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Submitting form data to API:', formData);

    try {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('API Error Response:', responseData);
        alert(`Error from API: ${responseData.message || 'Something went wrong'}`);
        setIsLoading(false);
        return;
      }

      console.log('API Success Response:', responseData);
      // alert('Data submitted to API successfully! Check console. Still using MOCK results for now.');

      console.log('API Success Response:', responseData);

      // Use the actual AI-generated (mocked) response from the API
      // Ensure responseData has { perfil, recomendaciones, plan }
      if (responseData.perfil && responseData.recomendaciones && responseData.plan) {
        setResults(responseData);
        router.push('/results');
      } else {
        console.error('API response did not contain expected fields:', responseData);
        alert('The AI response was not in the expected format. Please try again.');
      }

    } catch (error) {
      console.error('Network or fetch error:', error);
      alert(`Network error: ${error.message || 'Could not connect to API'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Question1Rol value={formData.rol} handleChange={handleChange('rol')} />;
      case 2:
        return <Question2ObjetivoIA value={formData.objetivoIA} handleChange={handleChange('objetivoIA')} />;
      case 3:
        return <Question3Tareas value={formData.tareas} handleChange={handleChange('tareas')} />;
      case 4:
        return <Question4HerramientasActuales value={formData.herramientasActuales} handleChange={handleChange('herramientasActuales')} />;
      case 5:
        return <Question5Comodidad value={formData.comodidad} handleChange={handleChange('comodidad')} />;
      case 6:
        return <Question6Idioma value={formData.idioma} handleChange={handleChange('idioma')} />;
      default:
        return <p>Step not found</p>;
    }
  };

  return (
    <div className={styles.wizardFormContainer}>
      <h2 className={styles.stepIndicator}>IA Pathfinder Quiz - Step {currentStep} of {TOTAL_STEPS}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.questionArea}>
          {renderStep()}
        </div>
        <div className={styles.navigationButtons}>
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className={styles.navButton}>
              Previous
            </button>
          )}
          {/* Spacer to push next/submit to the right if only one is visible */}
          {currentStep === 1 && <div />}

          {currentStep < TOTAL_STEPS && (
            <button type="button" onClick={nextStep} className={styles.navButton}>
              Next
            </button>
          )}
          {currentStep === TOTAL_STEPS && (
            <button type="submit" className={styles.submitButton} disabled={isLoading}>
              {isLoading ? 'Generando Hoja de Ruta...' : 'Obtener Mi Hoja de Ruta'}
            </button>
          )}
        </div>
      </form>
      {isLoading && <p className={styles.loadingText}>Analizando tus respuestas y buscando las mejores herramientas para ti...</p>}
    </div>
  );
};

export default WizardForm;
