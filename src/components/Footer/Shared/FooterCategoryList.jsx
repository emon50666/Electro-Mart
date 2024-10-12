import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../../Hooks/useCategories';

const FooterCategoryList = () => {
    const { categories } = useCategories();
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(!showAll);
    };
    const visibleCategories = showAll ? categories : categories.slice(0, 6);

    return (
        <div>
            <ul>
                {visibleCategories.map((cat, idx) => (
                    cat?.newCategory !== "" && (
                        <li key={idx}>
                            <Link to="/" className="text-white underline-hover">
                                {cat.newCategory}
                            </Link>
                        </li>
                    )
                ))}
            </ul>

            {/* Button to toggle between showing all or limited categories */}
            <button
                onClick={handleShowAll}
                className="text-white"
            >
                {showAll ? "Show Less" : "All Categories"}
            </button>
        </div>
    );
};

export default FooterCategoryList;