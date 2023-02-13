import './CSS/index.css'
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Contexts/ContextProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
     <BrowserRouter>
         <App />
     </BrowserRouter>
    </ContextProvider>
);
