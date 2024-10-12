import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../../Hooks/useCategories';

const FooterCategoryList = () => {
    const { categories } = useCategories();
    const [showAll, setShowAll] = useState(false);

    // Toggle show/hide categories
    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    // Collapse list when a category is clicked
    const handleCategoryClick = () => {
        setShowAll(false);
    };

    const visibleCategories = showAll ? categories : categories.slice(0, 5);

    return (
        <div>
            <ul>
                {visibleCategories.map((cat, idx) => (
                    cat?.newCategory !== "" && (
                        <li key={idx}>
                            <Link
                                to="/"
                                className="text-white underline-hover"
                                onClick={handleCategoryClick} // Collapse when clicked
                            >
                                {cat.newCategory}
                            </Link>
                        </li>
                    )
                ))}
            </ul>
            <button
                onClick={handleShowAll}
                className="text-white lg:text-base xl:text-lg"
            >
                {showAll ? "Show Less" : "All Categories"}
            </button>
        </div>
    );
};

export default FooterCategoryList;
