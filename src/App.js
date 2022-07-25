import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  const [categories] = useState([
    {
      name: "About Me",
      description: "A short blurb about myself",
    },
    {
      name: "Portfolio",
      description: "A portfolio of projects I've worked on",
    },
    {
      name: "Contact",
      description: "A form to contact me",
    },
    {
      name: "Resume",
      description: "My resume",
    },
  ]);

  const [pageSelected, setPageSelected] = useState('About Me');
  

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <main>
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          pageSelected={pageSelected}
          setPageSelected={setPageSelected}
        ></Header>
        {pageSelected==='About Me' && <About></About>}
        {pageSelected==='Portfolio' && <Portfolio></Portfolio>}
        {pageSelected==='Contact' && <Contact></Contact>}
        {pageSelected==='Resume' && <Resume></Resume>}
      </main>
    </div>
  );
}

export default App;
