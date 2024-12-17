import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useCategories from "../../Hooks/useCategories";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const MobileNavBar = () => {
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop-page",
    },
    {
      title: "Store",
      path: "/storesPage",
    },
    {
      title: "Promotion",
      path: "/promotion",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contacts",
    },
  ];

  return (
    <div className="relative">
      <div className="sticky top-0 z-40 pt-10 bg-white">
        <Tabs>
          <TabList className=" shadow-sm flex ">
            <Tab
              selectedClassName="w-full  text-blue-600 underline"
              className="pr-4 py-0 cursor-pointer rounded-lg"
            >
              Menu
            </Tab>
            <Tab
              selectedClassName="w-full text-blue-600 underline"
              className="pr-4 py-0 cursor-pointer rounded-lg"
            >
              Category
            </Tab>
          </TabList>

          <div className="overflow-y-auto h-[calc(100vh-100px)]">
            <TabPanel>
              {/* Add your content here */}
              <ul className="space-y-3 mt-5 text-md font-medium">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-600 font-semibold underline"
                          : "text-black"
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="menu menu-vertical space-y-2">
                {categories.map(
                  (cat, idx) =>
                    cat?.newCategory && (
                      <li key={idx}>
                        <Link
                          to={`/shop-page?category=${cat.newCategory}`}
                          onClick={() => handleCategoryClick(cat.newCategory)}
                        >
                          <span
                            className={`text-md font-medium py-0 text-gray-600 hover:text-blue-500 hover:underline ${
                              selectedCategory === cat.newCategory
                                ? "text-blue-600"
                                : "text-black"
                            }`}
                          >
                            {cat.newCategory}
                          </span>
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default MobileNavBar;
