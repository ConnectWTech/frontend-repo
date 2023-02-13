import React, { useState } from 'react';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState('');
  const [type_of, settype_of] = useState('');
  const state = {
    userId,
    setUserId,
    type_of,
    settype_of
  };

  return (
    <Context.Provider value={ state }> 
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;