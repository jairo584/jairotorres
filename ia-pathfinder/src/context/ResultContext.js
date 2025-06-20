// ia-pathfinder/src/context/ResultContext.js
"use client";

import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext(null);

export const useResultContext = () => {
  const context = useContext(ResultContext);
  if (context === null) {
    // This will happen if the component is not wrapped in ResultProvider
    // For this app, we'll return a default/empty state or throw an error
    // depending on how strictly we want to enforce provider usage.
    // For now, let's return a state that indicates no results.
    return { results: null, setResults: () => console.warn("ResultProvider not found") };
  }
  return context;
};

export const ResultProvider = ({ children }) => {
  const [results, setResults] = useState(null);

  return (
    <ResultContext.Provider value={{ results, setResults }}>
      {children}
    </ResultContext.Provider>
  );
};
