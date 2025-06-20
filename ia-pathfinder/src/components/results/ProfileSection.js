// ia-pathfinder/src/components/results/ProfileSection.js
import React from 'react';
import styles from './ProfileSection.module.css';

const ProfileSection = ({ perfil }) => {
  if (!perfil) return null;

  return (
    <section className={styles.profileSection}>
      <h2 className={styles.heading}>Tu Perfil IA:</h2>
      <p className={styles.profileText}>{perfil}</p>
    </section>
  );
};

export default ProfileSection;
