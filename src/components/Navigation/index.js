import React, { useEffect } from "react";

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    pageSelected,
    setPageSelected,
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <nav>
      <ul className="flex-row mr-5">
        {categories.map((category) => (
          <li
            className={`mx-1
                    ${currentCategory.name === category.name && "navActive"}`}
            onClick={() => {
              setCurrentCategory(category);
              setPageSelected(category.name);
              console.log(pageSelected);
            }}
          >
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
