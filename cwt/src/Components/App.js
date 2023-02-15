import { Routes, Route, Navigate} from "react-router-dom";
import React from 'react';
import EngineerFeeds from'./EngineerFeeds'
import LogIn from './Login'
import SignUp from './Signup'
import JobsFeeds from './JobsFeeds'
import Application from "./Application";
import Profile from "./Profile"
import PostForm from "./PostForm"
import LandingPage from "./LandingPage";
import JobsForm from "./JobsForm";
import Search from "./Search";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/EngineerFeeds' element={<EngineerFeeds/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/jobs' element={<JobsFeeds/>}/>
        <Route path='/Applications' element={<Application/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/PostWedsite' element={<PostForm/>}/>
        <Route path='/JobsForm' element={<JobsForm/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>  
     </Routes> 
    </div>
  );
}

export default App;
