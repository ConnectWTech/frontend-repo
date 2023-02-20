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
import JobInfo from "./JobPostInfo";
import WebPostInfo from "./WebPostInfo";
import SetUpProfile from "./SetUpProfile";
import ProfileForm from "./ProfileForm";
import EditPostForm from './EditPostForm'
import Comments from "./Comment";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/SetUp' element={<SetUpProfile/>}/>
        <Route path='/EngineerFeeds' element={<EngineerFeeds/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/jobs' element={<JobsFeeds/>}/>
        <Route path='/jobs/:id' element={<JobInfo/>}/>
        <Route path='/post/:id' element={<WebPostInfo/>}/>
        <Route path='/editPost/:id' element={<EditPostForm/>}/>
        <Route path='/Applications' element={<Application/>}/>
        <Route path='/Profile/:id' element={<Profile/>}/>
        <Route path='/PostWebsite' element={<PostForm/>}/>
        <Route path='/JobsForm' element={<JobsForm/>}/>
        <Route path='/ProfileForm' element={<ProfileForm/>}/>
        <Route path='/Comment/:id' element={<Comments/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>  
     </Routes> 
    </div>
  );
}

export default App;
