import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../../Hooks/useCategories';

const FooterCategoryList = () => {
    const { categories } = useCategories();
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(!showAll);
    };
    const visibleCategories = showAll ? categories : categories.slice(0, 5);

    return (
        <div>
            <ul className=''>
                {visibleCategories.map((cat, idx) => (
                    cat?.newCategory !== "" && (
                        <li key={idx}>
                            <Link to="/" className="text-gray-400 underline-hover">
                                {cat.newCategory}
                            </Link>
                        </li>
                    )
                ))}
            </ul>
            <button
                onClick={handleShowAll}
                className="text-gray-400"
            >
                {showAll ? "Show Less" : "All Categories"}
            </button>
        </div>
    );
};

export default FooterCategoryList;