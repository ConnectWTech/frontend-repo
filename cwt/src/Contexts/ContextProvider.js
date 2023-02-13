import React, { useState } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  
  const state = {};

  return (
    <Context.Provider value={ state }> 
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;