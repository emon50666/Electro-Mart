import { useState } from "react";
import { Link } from "react-router-dom";
import useCategories from "../../../Hooks/useCategories";

const FooterCategoryList = () => {
  const { categories } = useCategories();
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleCategoryClick = () => {
    setShowAll(false);
  };

  const visibleCategories = showAll ? categories : categories.slice(0, 4);
  return (
    <div>
      <ul className="mt-2 space-y-1 md:space-y-2 text-md ">
        {visibleCategories.map(
          (cat, idx) =>
            cat?.newCategory !== "" && (
              <li key={idx}>
                <Link
                  to={`/shop-page?category=${cat.newCategory}`}
                  className="text-gray-300 xl:text-white underline-hover"
                  onClick={handleCategoryClick}
                >
                  {cat.newCategory}
                </Link>
              </li>
            )
        )}
      </ul>
      <button
        onClick={handleShowAll}
        className="text-gray-400 xl:text-white lg:text-base xl:text-lg"
      >
        {showAll ? "Show Less" : "All Categories"}
      </button>
    </div>
  );
};

export default FooterCategoryList;
