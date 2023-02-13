import { Routes, Route, Navigate} from "react-router-dom";
import React from 'react';
import LandingPage from'./EngineerFeeds'
import LogIn from './Login'
import SignUp from './Signup'
import JobsFeeds from './JobsFeeds'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>  
     </Routes> 
    </div>
  );
}

export default App;
