import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const { categories = [], setCurrentCategory, currentCategory, pageSelected, setPageSelected } = props;

  return (
    <header>
      <h1>Aidan Christie</h1>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      ></Navigation>
    </header>
  );
}

export default Header;
