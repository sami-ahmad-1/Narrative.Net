import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login-SignUp/LoginPage";
import SignUpPage from "./Components/Login-SignUp/SignUpPage";
import Profile from "./Admin/AdminProfile";
import WritingArea from "./Admin/WritingArea";
import CMyBlogs from "./Admin/Blogs";
import Blogs from "./User/Blogs";
import UserProfile from './User/UserProfile'

function App() {
  return (
    
    <CssVarsProvider>
      <Sheet variant="outlined">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />        
            <Route path="/blogs" element={<Blogs />} />                        
            <Route path="/Profile" element={<Profile />} />                        
            <Route path="/WritingArea" element={<WritingArea />} />                        
            <Route path="/cmyblogs" element={<CMyBlogs />} />                        
            <Route path="/MyProfile" element={<UserProfile />} />                        
          </Routes>
        </BrowserRouter>
      </Sheet>
    </CssVarsProvider>
  );
}

export default App