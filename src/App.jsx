import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login-SignUp/LoginPage";
import SignUpPage from "./Components/Login-SignUp/SignUpPage";
import Blogs from "./Pages/Blogs";
import CHome from "./Creator/CHome";
import CWrite from "./Creator/CWrite";
import CMyBlogs from "./Creator/CMyBlogs";

function App() {
  return (
    
    <CssVarsProvider>
      <Sheet variant="outlined">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />        
            <Route path="/blogs" element={<Blogs />} />                        
            <Route path="/chome" element={<CHome />} />                        
            <Route path="/cwrite" element={<CWrite />} />                        
            <Route path="/cmyblogs" element={<CMyBlogs />} />                        
          </Routes>
        </BrowserRouter>
      </Sheet>
    </CssVarsProvider>
  );
}

export default App