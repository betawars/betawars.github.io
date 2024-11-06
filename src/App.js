import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import emailjs from '@emailjs/browser';

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => emailjs.init("qF0ZSkp-SRC-nsEEh"), []);
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>

        <AnimatePresence mode='wait'>

          <Routes key={location.pathname} location={location} >

            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/blog" element={<BlogPage />} />

            <Route path="/work" element={<WorkPage />} />

            <Route path="/skills" element={<MySkillsPage />} />

            <Route path="*" element={<Main click={true} />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
