import React, { useEffect } from "react";

function Navigation(props) {
  const { categories = [], setCurrentCategory, currentCategory, pageSelected, setPageSelected } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <nav>
      <ul className="flex-row">
        {categories.map((category) => (
          <li
            className={`mx-1
                    ${currentCategory.name === category.name && "navActive"}`}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setPageSelected(category.name);
                console.log(pageSelected)
              }}
            >
              {category.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
